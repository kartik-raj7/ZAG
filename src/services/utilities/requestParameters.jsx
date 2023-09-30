function requestParameters(searchurl){
    return(
        [
            {
              target: searchurl,
              max_crawl_pages: 1,
              load_resources: true,
              enable_javascript: true,
              custom_js: "meta = {}; meta.url = document.URL; meta;",
            },
          ]
    )
}
export default requestParameters;