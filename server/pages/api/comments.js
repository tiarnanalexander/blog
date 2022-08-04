"use strict";
(() => {
var exports = {};
exports.id = 265;
exports.ids = [265];
exports.modules = {

/***/ 9597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ asynchandler)
});

;// CONCATENATED MODULE: external "graphql-request"
const external_graphql_request_namespaceObject = require("graphql-request");
;// CONCATENATED MODULE: ./pages/api/comments.js

const graphqlAPI = "https://api-eu-west-2.graphcms.com/v2/cl56x71wu47w501ug3c1dc2dp/master";
async function asynchandler(req, res) {
    const graphQLClient = new external_graphql_request_namespaceObject.GraphQLClient(graphqlAPI, {
        headers: {
            authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`
        }
    });
    const query = external_graphql_request_namespaceObject.gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
      createComment(data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}) { id }
    }
  `;
    const result = await graphQLClient.request(query, {
        name: req.body.name,
        email: req.body.email,
        comment: req.body.comment,
        slug: req.body.slug
    });
    return res.status(200).send(result);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9597));
module.exports = __webpack_exports__;

})();