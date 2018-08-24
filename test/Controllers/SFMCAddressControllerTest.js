/*
 * SalesforceMarketingCloudLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */
 'use strict';

const chai = require('chai');
const assert = chai.assert;
const TestHelper = require("../TestHelper");
const APIHelper = require("../../lib/APIHelper");
const testerlib = require("../../lib");
const testConfiguration = require("../TestBootstrap");
const baseController = require("../../lib/Controllers/BaseController");

const controller = testerlib.SFMCAddressController;
const ValidateEmailRequest = testerlib.ValidateEmailRequest;

describe("SFMCAddressController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * To validate an email address, 
perform an HTTP POST specifying the email address and 
validators to be used in the payload of the HTTP POST. 
You can use more than one validator in the same call.

https://code.exacttarget.com/apis-sdks/rest-api/v1/address/validateEmail.html
     */
    it("should testValidateEmail response", function testValidateEmailTest(done) {
        // parameters for the API call
        let contentType = 'application/json';
        let body = baseController.getObjectMapper().mapObject({"email": "help@example.com", "validators": ["SyntaxValidator", "MXValidator", "ListDetectiveValidator"]}, 'ValidateEmailRequest');

        controller.createValidateEmail(contentType, body, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            done();
        });
    });
});
