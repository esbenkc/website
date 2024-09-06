module Jekyll
    class ReadTimeGenerator < Generator
      safe true
      priority :low
  
      def generate(site)
        # Process all pages
        site.pages.each do |page|
          page.data['read_time'] = calculate_read_time(page.content)
        end
  
        # Process all posts
        site.posts.docs.each do |post|
          post.data['read_time'] = calculate_read_time(post.content)
        end
  
        # Process all collections
        site.collections.each do |_, collection|
          collection.docs.each do |doc|
            doc.data['read_time'] = calculate_read_time(doc.content)
          end
        end
      end
  
      def calculate_read_time(content)
        # Strip HTML tags and whitespace
        words = content.gsub(/<\/?[^>]*>/, "").gsub(/\s+/, " ").split.size
  
        # Assume 200 words per minute reading speed
        minutes = (words / 200.0).ceil
  
        if minutes < 1
          "< 1 minute read"
        elsif minutes == 1
          "1 minute read"
        else
          "#{minutes} minute read"
        end
      end
    end
  end