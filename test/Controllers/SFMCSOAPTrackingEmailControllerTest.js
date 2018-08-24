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

const controller = testerlib.SFMCSOAPTrackingEmailController;
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


describe("SFMCSOAPTrackingEmailController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Retrieve High Level Send Data
     */
    it("should testSendRetrieveTrackingUP response", function testSendRetrieveTrackingUPTest(done) {
        // parameters for the API call
        let contentType = 'text/xml';
        let body = '<?xml version="1.0" encoding="UTF-8"?>\n<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">\n   <s:Header>\n      <a:Action s:mustUnderstand="1">Retrieve</a:Action>\n      <a:MessageID>urn:uuid:7e0cca04-57bd-4481-864c-6ea8039d2ea0</a:MessageID>\n      <a:ReplyTo>\n         <a:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</a:Address>\n      </a:ReplyTo>\n      <a:To s:mustUnderstand="1">{{soapEndPoint}}</a:To>\n      <o:Security xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" s:mustUnderstand="1">\n         <o:UsernameToken>\n            <o:Username>{{soapUsername}}</o:Username>\n            <o:Password><![CDATA[{{soapPassword}}]]></o:Password>\n         </o:UsernameToken>\n      </o:Security>\n   </s:Header>\n   <s:Body xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">\n      <RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">\n         <RetrieveRequest>\n            <!--\n             <ClientIDs>\n                <ID>1340293</ID>\n             </ClientIDs>\n             <QueryAllAccounts>true</QueryAllAccounts>\n            -->\n            <ObjectType>Send</ObjectType>\n            <Properties>ID</Properties>\n            <Properties>EmailName</Properties>\n            <Properties>Subject</Properties>\n            <Properties>SendDate</Properties>\n            <Properties>FromName</Properties>\n            <Properties>FromAddress</Properties>\n            <Properties>UniqueOpens</Properties>\n            <Properties>UniqueClicks</Properties>\n            <Properties>Unsubscribes</Properties>\n            <Properties>NumberSent</Properties>\n            <Properties>NumberDelivered</Properties>\n            <Properties>NumberErrored</Properties>\n            <Properties>NumberExcluded</Properties>\n            <Properties>HardBounces</Properties>\n            <Properties>SoftBounces</Properties>\n            <Properties>OtherBounces</Properties>\n            <Filter xsi:type="SimpleFilterPart">\n               <Property>ID</Property>\n               <SimpleOperator>equals</SimpleOperator>\n               <Value>364147</Value>\n            </Filter>\n         </RetrieveRequest>\n      </RetrieveRequestMsg>\n   </s:Body>\n</s:Envelope>';

        controller.createSendRetrieveTrackingUP(contentType, body, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            done();
        });
    });

    /**
     * Retrieve Opens for a Send
     */
    it("should testOpensRetrieveUP response", function testOpensRetrieveUPTest(done) {
        // parameters for the API call
        let contentType = 'text/xml';
        let body = '<?xml version="1.0" encoding="UTF-8"?>\n<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">\n   <s:Header>\n      <a:Action s:mustUnderstand="1">Retrieve</a:Action>\n      <a:MessageID>urn:uuid:7e0cca04-57bd-4481-864c-6ea8039d2ea0</a:MessageID>\n      <a:ReplyTo>\n         <a:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</a:Address>\n      </a:ReplyTo>\n      <a:To s:mustUnderstand="1">{{soapEndPoint}}</a:To>\n      <o:Security xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" s:mustUnderstand="1">\n         <o:UsernameToken>\n            <o:Username>{{soapUsername}}</o:Username>\n            <o:Password><![CDATA[{{soapPassword}}]]></o:Password>\n         </o:UsernameToken>\n      </o:Security>\n   </s:Header>\n   <s:Body xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">\n      <RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">\n         <RetrieveRequest>\n            <!--\n             <ClientIDs>\n                <ID>1340293</ID>\n             </ClientIDs>\n             <QueryAllAccounts>true</QueryAllAccounts>\n            -->\n            <ObjectType>OpenEvent</ObjectType>\n            <Properties>SendID</Properties>\n            <Properties>EventDate</Properties>\n            <Properties>SubscriberKey</Properties>\n            <Filter xsi:type="par:ComplexFilterPart" xmlns:par="http://exacttarget.com/wsdl/partnerAPI">\n\t\t\t<LeftOperand xsi:type="par:SimpleFilterPart">\n               <Property>EventDate</Property>\n               <SimpleOperator>greaterThan</SimpleOperator>\n               <DateValue>2016-06-12T00:00:00</DateValue>\n            </LeftOperand>\n            <LogicalOperator>AND</LogicalOperator>\n            <RightOperand xsi:type="SimpleFilterPart">\n               <Property>SendID</Property>\n               <SimpleOperator>equals</SimpleOperator>\n               <Value>364147</Value>\n            </RightOperand>\n            </Filter>\n         </RetrieveRequest>\n      </RetrieveRequestMsg>\n   </s:Body>\n</s:Envelope>';

        controller.createOpensRetrieveUP(contentType, body, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            done();
        });
    });

    /**
     * TODO: Add Description
     */
    it("should testSentRetrieveUP response", function testSentRetrieveUPTest(done) {
        // parameters for the API call
        let contentType = 'text/xml';
        let body = '<?xml version="1.0" encoding="UTF-8"?>\n<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">\n   <s:Header>\n      <a:Action s:mustUnderstand="1">Retrieve</a:Action>\n      <a:MessageID>urn:uuid:7e0cca04-57bd-4481-864c-6ea8039d2ea0</a:MessageID>\n      <a:ReplyTo>\n         <a:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</a:Address>\n      </a:ReplyTo>\n      <a:To s:mustUnderstand="1">{{soapEndPoint}}</a:To>\n      <o:Security xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" s:mustUnderstand="1">\n         <o:UsernameToken>\n            <o:Username>{{soapUsername}}</o:Username>\n            <o:Password><![CDATA[{{soapPassword}}]]></o:Password>\n         </o:UsernameToken>\n      </o:Security>\n   </s:Header>\n   <s:Body>\n      <RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">\n         <RetrieveRequest>\n            <ObjectType>SentEvent</ObjectType>\n            <Properties>Client.ID</Properties>\n            <Properties>TriggeredSendDefinitionObjectID</Properties>\n            <Properties>SendID</Properties>\n            <Properties>SubscriberKey</Properties>\n            <Properties>EventDate</Properties>\n            <Properties>EventType</Properties>\n            <Properties>BatchID</Properties>\n            <Properties>ListID</Properties>\n            <!-- If you want to limit the results returned by date\n            <Filter xsi:type="ns1:SimpleFilterPart" xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI">\n               <Property>EventDate</Property>\n               <SimpleOperator>between</SimpleOperator>\n               <DateValue>2009-06-30T03:00:00.000Z</DateValue>\n               <DateValue>2017-03-02T02:59:59.999Z</DateValue>\n            </Filter>\n            -->\n         </RetrieveRequest>\n      </RetrieveRequestMsg>\n   </s:Body>\n</s:Envelope>';

        controller.createSentRetrieveUP(contentType, body, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            done();
        });
    });

    /**
     * TODO: Add Description
     */
    it("should testLinkSendRetrieveUP response", function testLinkSendRetrieveUPTest(done) {
        // parameters for the API call
        let contentType = 'text/xml';
        let body = '<?xml version="1.0" encoding="UTF-8"?>\n<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">\n   <s:Header>\n      <a:Action s:mustUnderstand="1">Retrieve</a:Action>\n      <a:MessageID>urn:uuid:7e0cca04-57bd-4481-864c-6ea8039d2ea0</a:MessageID>\n      <a:ReplyTo>\n         <a:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</a:Address>\n      </a:ReplyTo>\n      <a:To s:mustUnderstand="1">{{soapEndPoint}}</a:To>\n      <o:Security xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" s:mustUnderstand="1">\n         <o:UsernameToken>\n            <o:Username>{{soapUsername}}</o:Username>\n            <o:Password><![CDATA[{{soapPassword}}]]></o:Password>\n         </o:UsernameToken>\n      </o:Security>\n   </s:Header>\n   <s:Body>\n      <RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">\n         <RetrieveRequest>\n            <ObjectType>LinkSend</ObjectType>\n            <Properties>SendID</Properties>\n\t\t\t<Properties>Link.ID</Properties>\n\t\t\t<Properties>Link.TotalClicks</Properties>\n\t\t\t<Properties>Link.UniqueClicks</Properties>\n\t\t\t<Properties>Link.URL</Properties>\n\t\t\t<Properties>Link.Alias</Properties>\n         </RetrieveRequest>\n      </RetrieveRequestMsg>\n   </s:Body>\n</s:Envelope>';

        controller.createLinkSendRetrieveUP(contentType, body, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            done();
        });
    });
});
