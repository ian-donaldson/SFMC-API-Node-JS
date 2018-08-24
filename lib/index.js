/**
  * @module SalesforceMarketingCloudLib
  *
  * TODO: Add Description
  */

'use strict';

const Configuration = require('./configuration');
const Environments = require('./Environments');
const SFMCPlatformController = require('./Controllers/SFMCPlatformController');
const SFMCDataEventsSynchronousController =
  require('./Controllers/SFMCDataEventsSynchronousController');
const SFMCDataEventsAsynchronousController =
  require('./Controllers/SFMCDataEventsAsynchronousController');
const SFMCAssetsController = require('./Controllers/SFMCAssetsController');
const SFMCContactsController = require('./Controllers/SFMCContactsController');
const SFMCCampaignsController = require('./Controllers/SFMCCampaignsController');
const SFMCAnalyticsController = require('./Controllers/SFMCAnalyticsController');
const SFMCAddressController = require('./Controllers/SFMCAddressController');
const AuthController = require('./Controllers/AuthController');
const SFMCPushController = require('./Controllers/SFMCPushController');
const SFMCMessagingController = require('./Controllers/SFMCMessagingController');
const SFMCSOAPSubscribersController = require('./Controllers/SFMCSOAPSubscribersController');
const SFMCSOAPTrackingEmailController = require('./Controllers/SFMCSOAPTrackingEmailController');
const SFMCSOAPListsController = require('./Controllers/SFMCSOAPListsController');
const SFMCSOAPEmailSendDefinitionController =
  require('./Controllers/SFMCSOAPEmailSendDefinitionController');
const SFMCSOAPEmailController = require('./Controllers/SFMCSOAPEmailController');
const SFMCSOAPDataExtensionsController = require('./Controllers/SFMCSOAPDataExtensionsController');
const SFMCLocationController = require('./Controllers/SFMCLocationController');
const SFMCEventsController = require('./Controllers/SFMCEventsController');
const SFMCInteractionsController = require('./Controllers/SFMCInteractionsController');
const SFMCSOAPAutomationController = require('./Controllers/SFMCSOAPAutomationController');
const SFMCSOAPAdministrationController = require('./Controllers/SFMCSOAPAdministrationController');
const SFMCRESTAPIQueriesController = require('./Controllers/SFMCRESTAPIQueriesController');
const SocialStudioAuthorsController = require('./Controllers/SocialStudioAuthorsController');
const SFMCSOAPTriggeredEmailController = require('./Controllers/SFMCSOAPTriggeredEmailController');
const SocialStudioClientsController = require('./Controllers/SocialStudioClientsController');
const SocialStudioEngageMacrosController =
  require('./Controllers/SocialStudioEngageMacrosController');
const SocialStudioImportedPublishedPostMetricsController =
  require('./Controllers/SocialStudioImportedPublishedPostMetricsController');
const SocialStudioKeywordGroupsController =
  require('./Controllers/SocialStudioKeywordGroupsController');
const SocialStudioLanguagesController = require('./Controllers/SocialStudioLanguagesController');
const SocialStudioMediatypesController = require('./Controllers/SocialStudioMediatypesController');
const SocialStudioPostController = require('./Controllers/SocialStudioPostController');
const SocialStudioPublishApprovalRulesController =
  require('./Controllers/SocialStudioPublishApprovalRulesController');
const SocialStudioPublishLabelsController =
  require('./Controllers/SocialStudioPublishLabelsController');
const SocialStudioRegionsController = require('./Controllers/SocialStudioRegionsController');
const SocialStudioSharedContentClipsController =
  require('./Controllers/SocialStudioSharedContentClipsController');
const SocialStudioShortURLsController = require('./Controllers/SocialStudioShortURLsController');
const SocialStudioSocialAccountsController =
  require('./Controllers/SocialStudioSocialAccountsController');
const SocialStudioSourcesAndSourceGroupsController =
  require('./Controllers/SocialStudioSourcesAndSourceGroupsController');
const SocialStudioTopicProfilesController =
  require('./Controllers/SocialStudioTopicProfilesController');
const SocialStudioUsersController = require('./Controllers/SocialStudioUsersController');
const SocialStudioWorkspacesController = require('./Controllers/SocialStudioWorkspacesController');
const UpdateAWorkspaceRequest = require('./Models/UpdateAWorkspaceRequest');
const CreateAWSRequest = require('./Models/CreateAWSRequest');
const ChangeUserPasswordRequest = require('./Models/ChangeUserPasswordRequest');
const UpdateKeywordGroupInATopicProfileCopyRequest =
  require('./Models/UpdateKeywordGroupInATopicProfileCopyRequest');
const MediaType = require('./Models/MediaType');
const UpdateSourceRequest = require('./Models/UpdateSourceRequest');
const CreateSourceRequest = require('./Models/CreateSourceRequest');
const UnshareSharedContentRequest = require('./Models/UnshareSharedContentRequest');
const Asset91 = require('./Models/Asset91');
const Contain79 = require('./Models/Contain79');
const AndContain = require('./Models/AndContain');
const Contain = require('./Models/Contain');
const Parameter = require('./Models/Parameter');
const ApplyAuthorCommentRequest = require('./Models/ApplyAuthorCommentRequest');
const DeleteATagFromAnAuthorRequest = require('./Models/DeleteATagFromAnAuthorRequest');
const ApplyAuthorTagRequest = require('./Models/ApplyAuthorTagRequest');
const From = require('./Models/From');
const IncludedAudience = require('./Models/IncludedAudience');
const Keys52 = require('./Models/Keys52');
const Subscriber = require('./Models/Subscriber');
const Attribute = require('./Models/Attribute');
const IncrementColumnObjectIDRequest = require('./Models/IncrementColumnObjectIDRequest');
const IncrementColumnKeyRequest = require('./Models/IncrementColumnKeyRequest');
const UpsertRowObjectIDRequest = require('./Models/UpsertRowObjectIDRequest');
const UpsertRowKeyRequest = require('./Models/UpsertRowKeyRequest');
const UpsertRowSetKeyRequest = require('./Models/UpsertRowSetKeyRequest');
const EngageMacroRemovedFromWSRequest = require('./Models/EngageMacroRemovedFromWSRequest');
const EngageMacroToAWSRequest = require('./Models/EngageMacroToAWSRequest');
const UserRemovedFromWSRequest = require('./Models/UserRemovedFromWSRequest');
const UserToAWSRequest = require('./Models/UserToAWSRequest');
const PublishMacroRemovedFromWSRequest = require('./Models/PublishMacroRemovedFromWSRequest');
const PublishMacroToAWSRequest = require('./Models/PublishMacroToAWSRequest');
const DeleteAWorkspaceRequest = require('./Models/DeleteAWorkspaceRequest');
const UpdateSourceGroupInATopicProfileRequest =
  require('./Models/UpdateSourceGroupInATopicProfileRequest');
const UpdateTopicRequest = require('./Models/UpdateTopicRequest');
const CreateTopicRequest = require('./Models/CreateTopicRequest');
const Keys = require('./Models/Keys');
const UpsertRowSetObjectIDRequest = require('./Models/UpsertRowSetObjectIDRequest');
const UpdateSourceGroupRequest = require('./Models/UpdateSourceGroupRequest');
const CreateSourceGroupRequest = require('./Models/CreateSourceGroupRequest');
const CreateSharedContentRequest = require('./Models/CreateSharedContentRequest');
const Asset = require('./Models/Asset');
const Item84 = require('./Models/Item84');
const ApprovalProceduresERRORSRequest = require('./Models/ApprovalProceduresERRORSRequest');
const CreateApprovalFlowAkaRuleRequest = require('./Models/CreateApprovalFlowAkaRuleRequest');
const UpdateKeywordGroupInATopicProfileRequest =
  require('./Models/UpdateKeywordGroupInATopicProfileRequest');
const CreateKeywordGroupRequest = require('./Models/CreateKeywordGroupRequest');
const UpdateTopicKeywordGroupRequest = require('./Models/UpdateTopicKeywordGroupRequest');
const EditMacroRequest = require('./Models/EditMacroRequest');
const CreateSendToSalesforceMacroRequest = require('./Models/CreateSendToSalesforceMacroRequest');
const CreateMacroAllActionsRequest = require('./Models/CreateMacroAllActionsRequest');
const Value = require('./Models/Value');
const Item = require('./Models/Item');
const AttributeSet = require('./Models/AttributeSet');
const Action = require('./Models/Action');
const AssociateAssetSToACampaignRequest = require('./Models/AssociateAssetSToACampaignRequest');
const CreateMacroRequest = require('./Models/CreateMacroRequest');
const PushSendByMessageIdRequest = require('./Models/PushSendByMessageIdRequest');
const ContactAttributes = require('./Models/ContactAttributes');
const To = require('./Models/To');
const MessageDefinitionSendEmailRequest = require('./Models/MessageDefinitionSendEmailRequest');
const Application = require('./Models/Application');
const QueueMORequest = require('./Models/QueueMORequest');
const Center = require('./Models/Center');
const Values = require('./Models/Values');
const AssetRequest = require('./Models/AssetRequest');
const CreateContactRequest = require('./Models/CreateContactRequest');
const ValidateEmailRequest = require('./Models/ValidateEmailRequest');
const RequestSFMCTokenRequest = require('./Models/RequestSFMCTokenRequest');
const CreateSharedContentAndAssociateItWithPostRequest =
  require('./Models/CreateSharedContentAndAssociateItWithPostRequest');
const CreateSharedContentImageTypeFromScratchInWSRequest =
  require('./Models/CreateSharedContentImageTypeFromScratchInWSRequest');
const CreateSharedContentInWSRequest = require('./Models/CreateSharedContentInWSRequest');
const CreateACampaignRequest = require('./Models/CreateACampaignRequest');
const SubscriberAttributes = require('./Models/SubscriberAttributes');
const MessageSendRequest = require('./Models/MessageSendRequest');
const CreateLocationRequest = require('./Models/CreateLocationRequest');
const UpdateUserRequest = require('./Models/UpdateUserRequest');
const CreateMessageRequest = require('./Models/CreateMessageRequest');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of SalesforceMarketingCloudLib
    Configuration,
    Environments,
    // controllers of SalesforceMarketingCloudLib
    SFMCPlatformController,
    SFMCDataEventsSynchronousController,
    SFMCDataEventsAsynchronousController,
    SFMCAssetsController,
    SFMCContactsController,
    SFMCCampaignsController,
    SFMCAnalyticsController,
    SFMCAddressController,
    AuthController,
    SFMCPushController,
    SFMCMessagingController,
    SFMCSOAPSubscribersController,
    SFMCSOAPTrackingEmailController,
    SFMCSOAPListsController,
    SFMCSOAPEmailSendDefinitionController,
    SFMCSOAPEmailController,
    SFMCSOAPDataExtensionsController,
    SFMCLocationController,
    SFMCEventsController,
    SFMCInteractionsController,
    SFMCSOAPAutomationController,
    SFMCSOAPAdministrationController,
    SFMCRESTAPIQueriesController,
    SocialStudioAuthorsController,
    SFMCSOAPTriggeredEmailController,
    SocialStudioClientsController,
    SocialStudioEngageMacrosController,
    SocialStudioImportedPublishedPostMetricsController,
    SocialStudioKeywordGroupsController,
    SocialStudioLanguagesController,
    SocialStudioMediatypesController,
    SocialStudioPostController,
    SocialStudioPublishApprovalRulesController,
    SocialStudioPublishLabelsController,
    SocialStudioRegionsController,
    SocialStudioSharedContentClipsController,
    SocialStudioShortURLsController,
    SocialStudioSocialAccountsController,
    SocialStudioSourcesAndSourceGroupsController,
    SocialStudioTopicProfilesController,
    SocialStudioUsersController,
    SocialStudioWorkspacesController,
    // models of SalesforceMarketingCloudLib
    UpdateAWorkspaceRequest,
    CreateAWSRequest,
    ChangeUserPasswordRequest,
    UpdateKeywordGroupInATopicProfileCopyRequest,
    MediaType,
    UpdateSourceRequest,
    CreateSourceRequest,
    UnshareSharedContentRequest,
    Asset91,
    Contain79,
    AndContain,
    Contain,
    Parameter,
    ApplyAuthorCommentRequest,
    DeleteATagFromAnAuthorRequest,
    ApplyAuthorTagRequest,
    From,
    IncludedAudience,
    Keys52,
    Subscriber,
    Attribute,
    IncrementColumnObjectIDRequest,
    IncrementColumnKeyRequest,
    UpsertRowObjectIDRequest,
    UpsertRowKeyRequest,
    UpsertRowSetKeyRequest,
    EngageMacroRemovedFromWSRequest,
    EngageMacroToAWSRequest,
    UserRemovedFromWSRequest,
    UserToAWSRequest,
    PublishMacroRemovedFromWSRequest,
    PublishMacroToAWSRequest,
    DeleteAWorkspaceRequest,
    UpdateSourceGroupInATopicProfileRequest,
    UpdateTopicRequest,
    CreateTopicRequest,
    Keys,
    UpsertRowSetObjectIDRequest,
    UpdateSourceGroupRequest,
    CreateSourceGroupRequest,
    CreateSharedContentRequest,
    Asset,
    Item84,
    ApprovalProceduresERRORSRequest,
    CreateApprovalFlowAkaRuleRequest,
    UpdateKeywordGroupInATopicProfileRequest,
    CreateKeywordGroupRequest,
    UpdateTopicKeywordGroupRequest,
    EditMacroRequest,
    CreateSendToSalesforceMacroRequest,
    CreateMacroAllActionsRequest,
    Value,
    Item,
    AttributeSet,
    Action,
    AssociateAssetSToACampaignRequest,
    CreateMacroRequest,
    PushSendByMessageIdRequest,
    ContactAttributes,
    To,
    MessageDefinitionSendEmailRequest,
    Application,
    QueueMORequest,
    Center,
    Values,
    AssetRequest,
    CreateContactRequest,
    ValidateEmailRequest,
    RequestSFMCTokenRequest,
    CreateSharedContentAndAssociateItWithPostRequest,
    CreateSharedContentImageTypeFromScratchInWSRequest,
    CreateSharedContentInWSRequest,
    CreateACampaignRequest,
    SubscriberAttributes,
    MessageSendRequest,
    CreateLocationRequest,
    UpdateUserRequest,
    CreateMessageRequest,
    // exceptions of SalesforceMarketingCloudLib
    APIException,
};

module.exports = initializer;
