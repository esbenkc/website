module Jekyll
    class SidenotesConverter < Converter
      safe true
      priority :low
  
      def matches(ext)
        ext =~ /^\.md$/i
      end
  
      def output_ext(ext)
        ".html"
      end
  
      def convert(content)
        content.gsub(/\[\^(\d+)\](?!:)/).with_index do |match, index|
          footnote_id = $1
          %Q{<label for="sidenote-#{footnote_id}" class="margin-toggle sidenote-number"></label>
  <input type="checkbox" id="sidenote-#{footnote_id}" class="margin-toggle"/>
  <span class="sidenote">#{content.match(/\[\^#{footnote_id}\]: (.+)$/).to_a[1]}</span>}
        end.gsub(/\[\^(\d+)\]:(.+)$/, '')
      end
    end
  end
  