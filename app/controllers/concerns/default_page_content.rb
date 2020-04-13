module DefaultPageContent
  extend ActiveSupport::Concern

  included do 
    before_action :set_page_defaults
  end 

  def set_page_defaults
    @page_title = "Tech95Desiign | My Portfolio Website"
    @seo_keywords = "Tech95Design portfolio"
  end
end
