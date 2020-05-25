/**
 * Fetches initial props from page in case method defined on React Page
 * Will resolve Promise if method is async
 * @param Page
 * @returns {Promise<void>}
 */
async function getInitialProps(Page) {
    let props = {};
    if (Page.getInitialProps) {
        if (Page.getInitialProps instanceof Promise) {
            props = await Page.getInitialProps()
        } else {
            props = Page.getInitialProps();
        }
    }
    return props;
}

export {
    getInitialProps
}