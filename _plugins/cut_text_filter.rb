module Jekyll
  module CutTextFilter
    def cut_text(input_string, max_length=150)
      if input_string.length > max_length
        input_string[0...max_length] + "..."
      else
        input_string
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::CutTextFilter)