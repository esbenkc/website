# _plugins/simple_analytics_generator.rb

require 'net/http'
require 'json'
require 'uri'
require 'date'

module Jekyll
  class SimpleAnalyticsGenerator < Generator
    safe true
    priority :low

    def generate(site)
      # Fetch the total analytics data
      total_start_date = '2024-07-30' # Adjust as needed or make configurable
      total_analytics_data = fetch_simple_analytics_data(total_start_date)

      # Fetch the current analytics data for fivedaysago
      fivedaysago = (Time.now.utc.to_date - 5).strftime('%Y-%m-%d')
      current_analytics_data = fetch_simple_analytics_data(fivedaysago)

      # If data was fetched successfully, log it to the jekyll build process
      if total_analytics_data && current_analytics_data  
        Jekyll.logger.info "SimpleAnalyticsGenerator:", "Fetched analytics data successfully."
        Jekyll.logger.info "SimpleAnalyticsGenerator:", "Total analytics data: #{total_analytics_data.length} pages"
        Jekyll.logger.info "SimpleAnalyticsGenerator:", "#{current_analytics_data}"
        Jekyll.logger.info "SimpleAnalyticsGenerator:", "Current analytics data: #{current_analytics_data.length} pages"
      end

      # To see the above, run jekyll build with the --verbose flag

      # Process data
      if total_analytics_data && current_analytics_data
        # Process all pages and posts
        pages_and_posts = site.pages + site.posts.docs

        # Include other collections if needed
        site.collections.each do |name, collection|
          pages_and_posts.concat(collection.docs) unless ['posts', 'pages'].include?(name)
        end

        pages_and_posts.each do |page|
          page_path = page.url
          # Remove leading and trailing slashes
          page_path = page_path.gsub(%r{^/|/$}, '')

          # Find the analytics data for this page in total data
          total_page_analytics = total_analytics_data.find do |data|
            analytics_page = data['value'].gsub(%r{^/|/$}, '')
            analytics_page == page_path
          end

          Jekyll.logger.info "SimpleAnalyticsGenerator:", "Page: #{page_path}"
          Jekyll.logger.info "SimpleAnalyticsGenerator:", "Data: #{total_page_analytics}"

          # Find the analytics data for this page in current data
          current_page_analytics = current_analytics_data.find do |data|
            analytics_page = data['value'].gsub(%r{^/|/$}, '')
            analytics_page == page_path
          end

          # Add total pageviews and visitors
          if total_page_analytics
            page.data['pageviews'] = total_page_analytics['pageviews']
            page.data['visitors'] = total_page_analytics['visitors']
          else
            page.data['pageviews'] = 0
            page.data['visitors'] = 0
          end

          # Add current pageviews and visitors
          if current_page_analytics
            page.data['currentpageviews'] = current_page_analytics['pageviews']
            page.data['currentvisitors'] = current_page_analytics['visitors']
          else
            page.data['currentpageviews'] = 0
            page.data['currentvisitors'] = 0
          end
        end
      else
        Jekyll.logger.warn "SimpleAnalyticsGenerator:", "Failed to fetch analytics data."
      end
    end

    private

    def fetch_simple_analytics_data(start_date, end_date = nil)
      # Fetch the API key from an environment variable
      api_key = ENV['SIMPLE_ANALYTICS_API_KEY']

      if api_key.nil? || api_key.empty?
        Jekyll.logger.error "SimpleAnalyticsGenerator:", "API key is missing. Please set the SIMPLE_ANALYTICS_API_KEY environment variable."
        return nil
      end

      # URL for SimpleAnalytics API with parameters
      url = "https://simpleanalytics.com/blog.kran.ai.json"
      params = {
        version: 5,
        fields: 'pageviews,visitors,pages',
        info: 'false',
        start: start_date
      }
      params[:end] = end_date if end_date

      uri = URI.parse(url)
      uri.query = URI.encode_www_form(params)

      begin
        # Set up HTTP connection
        http = Net::HTTP.new(uri.host, uri.port)
        http.use_ssl = true

        # Create the request
        request = Net::HTTP::Get.new(uri.request_uri)

        # Set the Api-Key header
        request['Api-Key'] = api_key

        # Send the request
        response = http.request(request)

        if response.is_a?(Net::HTTPSuccess)
          data = JSON.parse(response.body)
          # data['pages'] contains an array of page analytics
          return data['pages']
        else
          Jekyll.logger.warn "SimpleAnalyticsGenerator:", "HTTP request failed with code #{response.code}"
          Jekyll.logger.warn "SimpleAnalyticsGenerator:", "Response body: #{response.body}"
          return nil
        end
      rescue StandardError => e
        Jekyll.logger.error "SimpleAnalyticsGenerator:", "An error occurred: #{e.message}"
        return nil
      end
    end
  end
end
