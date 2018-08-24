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

const controller = testerlib.SFMCAnalyticsController;
const UpdateAWorkspaceRequest = testerlib.UpdateAWorkspaceRequest;
const CreateAWSRequest = testerlib.CreateAWSRequest;
const ChangeUserPasswordRequest = testerlib.ChangeUserPasswordRequest;
const UpdateKeywordGroupInATopicProfileCopyRequest = testerlib.UpdateKeywordGroupInATopicProfileCopyRequest;
const MediaType = testerlib.MediaType;
const UpdateSourceRequest = testerlib.UpdateSourceRequest;
const CreateSourceRequest = testerlib.CreateSourceRequest;
const UnshareSharedContentRequest = testerlib.UnshareSharedContentRequest;
const Asset91 = testerlib.Asset91;
const Contain79 = testerlib.Contain79;
const AndContain = testerlib.AndContain;
const Contain = testerlib.Contain;
const Parameter = testerlib.Parameter;
const ApplyAuthorCommentRequest = testerlib.ApplyAuthorCommentRequest;
const DeleteATagFromAnAuthorRequest = testerlib.DeleteATagFromAnAuthorRequest;
const ApplyAuthorTagRequest = testerlib.ApplyAuthorTagRequest;
const From = testerlib.From;
const IncludedAudience = testerlib.IncludedAudience;
const Keys52 = testerlib.Keys52;
const Subscriber = testerlib.Subscriber;
const Attribute = testerlib.Attribute;
const IncrementColumnObjectIDRequest = testerlib.IncrementColumnObjectIDRequest;
const IncrementColumnKeyRequest = testerlib.IncrementColumnKeyRequest;
const UpsertRowObjectIDRequest = testerlib.UpsertRowObjectIDRequest;
const UpsertRowKeyRequest = testerlib.UpsertRowKeyRequest;
const UpsertRowSetKeyRequest = testerlib.UpsertRowSetKeyRequest;
const EngageMacroRemovedFromWSRequest = testerlib.EngageMacroRemovedFromWSRequest;
const EngageMacroToAWSRequest = testerlib.EngageMacroToAWSRequest;
const UserRemovedFromWSRequest = testerlib.UserRemovedFromWSRequest;
const UserToAWSRequest = testerlib.UserToAWSRequest;
const PublishMacroRemovedFromWSRequest = testerlib.PublishMacroRemovedFromWSRequest;
const PublishMacroToAWSRequest = testerlib.PublishMacroToAWSRequest;
const DeleteAWorkspaceRequest = testerlib.DeleteAWorkspaceRequest;
const UpdateSourceGroupInATopicProfileRequest = testerlib.UpdateSourceGroupInATopicProfileRequest;
const UpdateTopicRequest = testerlib.UpdateTopicRequest;
const CreateTopicRequest = testerlib.CreateTopicRequest;
const Keys = testerlib.Keys;
const UpsertRowSetObjectIDRequest = testerlib.UpsertRowSetObjectIDRequest;
const UpdateSourceGroupRequest = testerlib.UpdateSourceGroupRequest;
const CreateSourceGroupRequest = testerlib.CreateSourceGroupRequest;
const CreateSharedContentRequest = testerlib.CreateSharedContentRequest;
const Asset = testerlib.Asset;
const Item84 = testerlib.Item84;
const ApprovalProceduresERRORSRequest = testerlib.ApprovalProceduresERRORSRequest;
const CreateApprovalFlowAkaRuleRequest = testerlib.CreateApprovalFlowAkaRuleRequest;
const UpdateKeywordGroupInATopicProfileRequest = testerlib.UpdateKeywordGroupInATopicProfileRequest;
const CreateKeywordGroupRequest = testerlib.CreateKeywordGroupRequest;
const UpdateTopicKeywordGroupRequest = testerlib.UpdateTopicKeywordGroupRequest;
const EditMacroRequest = testerlib.EditMacroRequest;
const CreateSendToSalesforceMacroRequest = testerlib.CreateSendToSalesforceMacroRequest;
const CreateMacroAllActionsRequest = testerlib.CreateMacroAllActionsRequest;
const Value = testerlib.Value;
const Item = testerlib.Item;
const AttributeSet = testerlib.AttributeSet;
const Action = testerlib.Action;
const AssociateAssetSToACampaignRequest = testerlib.AssociateAssetSToACampaignRequest;
const CreateMacroRequest = testerlib.CreateMacroRequest;
const PushSendByMessageIdRequest = testerlib.PushSendByMessageIdRequest;
const ContactAttributes = testerlib.ContactAttributes;
const To = testerlib.To;
const MessageDefinitionSendEmailRequest = testerlib.MessageDefinitionSendEmailRequest;
const Application = testerlib.Application;
const QueueMORequest = testerlib.QueueMORequest;
const Center = testerlib.Center;
const Values = testerlib.Values;
const AssetRequest = testerlib.AssetRequest;
const CreateContactRequest = testerlib.CreateContactRequest;
const ValidateEmailRequest = testerlib.ValidateEmailRequest;
const RequestSFMCTokenRequest = testerlib.RequestSFMCTokenRequest;
const CreateSharedContentAndAssociateItWithPostRequest = testerlib.CreateSharedContentAndAssociateItWithPostRequest;
const CreateSharedContentImageTypeFromScratchInWSRequest = testerlib.CreateSharedContentImageTypeFromScratchInWSRequest;
const CreateSharedContentInWSRequest = testerlib.CreateSharedContentInWSRequest;
const CreateACampaignRequest = testerlib.CreateACampaignRequest;
const SubscriberAttributes = testerlib.SubscriberAttributes;
const MessageSendRequest = testerlib.MessageSendRequest;
const CreateLocationRequest = testerlib.CreateLocationRequest;
const UpdateUserRequest = testerlib.UpdateUserRequest;
const CreateMessageRequest = testerlib.CreateMessageRequest;


describe("SFMCAnalyticsController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * TODO: Add Description
     */
    it("should testAnalyticEvent response", function testAnalyticEventTest(done) {
        // parameters for the API call
        let contentType = 'application/json';
        let body = '  {\n    "etAppId": "", \n    "deviceId": "", \n    "eventDate": "", \n    "analyticTypes": [\n        1, 2, 5\n    ], \n    "objectIds": [\n        "[MjM0OjExNDow]"\n    ], \n    "value": 123\n  }, \n  {\n    "etAppId": "", \n    "deviceId": "", \n    "eventDate": "[2013-07-11T09:34:55.547Z]", \n    "analyticTypes": [\n        1, 2, 6\n    ], \n    "objectIds": [\n        "[MjQ1OjExNDow]", \n        "[MTU6MTI4OjA]"\n    ]\n  }';

        controller.createAnalyticEvent(contentType, body, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            done();
        });
    });
});
