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

const controller = testerlib.SFMCCampaignsController;
const CreateACampaignRequest = testerlib.CreateACampaignRequest;
const AssociateAssetSToACampaignRequest = testerlib.AssociateAssetSToACampaignRequest;

describe("SFMCCampaignsController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Name of the campaign
Description
Campaign Code
Color 
Favorite

{
    "name": "Annual Sale 2012",
    "description": "Yearly sale",
    "campaignCode": "annual2012",
    "color": "0000ff",
    "favorite": false
}

https://code.exacttarget.com/apis-sdks/rest-api/v1/hub/campaigns/createCampaign.html
     */
    it("should testCreateACampaign response", function testCreateACampaignTest(done) {
        // parameters for the API call
        let contentType = 'application/json';
        let body = baseController.getObjectMapper().mapObject({"name": "Annual Sale 2016", "description": "Yearly sale", "campaignCode": "annual2016", "color": "0000ff", "favorite": false}, 'CreateACampaignRequest');

        controller.createACampaign(contentType, body, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            done();
        });
    });

    /**
     * Retrieve a collection of Campaigns

page, pageSize, orderBy available to include in URL.

?$page=1&$pageSize=2&$orderBy=Name ASC

https://code.exacttarget.com/apis-sdks/rest-api/v1/hub/campaigns/getCampaignCollection.html
     */
    it("should testRetrieveAllCampaigns response", function testRetrieveAllCampaignsTest(done) {
        // parameters for the API call
        let contentType = 'application/json';

        controller.retrieveAllCampaigns(contentType, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            done();
        });
    });

});
