Manual

1. Install globally shopify CLI https://shopify.dev/docs/themes/tools/cli/install
2. in file shopify.theme.toml update line "store" with store, you plan to work. With format 'STORE NAME'.myshopify.com
3. Run terminal in root folder
3. Install packages - "npm install"
4. Logout.  run command in terminal = "shopify auth logout". (!!Mandatory, if you're switching from another shopify store!!)
5. Get theme code:
    3.1 Run command "npm run theme:pull"
    3.2 Login to shopify store
    3.4.Chose theme you want to pull from the list (after success login)
6. In the folder "layout" find and open file theme.liquid
7. In the file theme.liquid before closing "body" tag, paste script tag with link to 'bundle.js' with liquid, 
(Example: `<script src="{{ 'bundle.js' | asset_url }}" defer="defer"></script>`)
8. In the file theme.liquid before closing "head" tag, paste liquid  link to 'bundle.css', 
(Example: `{{ 'bundle.css' | asset_url | stylesheet_tag: preload: true }}`)
9. From project root folder open second terminal
10. In one of the terminal run script 'npm run develop'
11. in the second terminal run script 'npm run theme:dev'

Normalize and reset

Template includes normalize.scss and reset.scss
If they are needed add normalize.scss and reset.scss imports to file styles.scss (location - `src/javascript/sas/styles.scss`) next after import "base/include-media".

Expected result:
`@import "base/include-media";
@import "base/reset";
@import "base/normalize";
@import "base/variables";
@import "base/mixins";`