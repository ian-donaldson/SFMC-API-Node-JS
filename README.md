# Getting started

TODO: Add Description

## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:

* `node --version`
* `npm -version`

![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=Salesforce%20Marketing%20Cloud-Node)

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):

```bash
npm install
```

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency1&workspaceFolder=Salesforce%20Marketing%20Cloud-Node)

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder.

Once dependencies are resolved, you will need to move the folder `SalesforceMarketingCloudLib ` in to your `node_modules` folder.

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

Click on `File` and select `Open Folder`.

![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=Salesforce%20Marketing%20Cloud-Node)

### 2. Creating a Test File

Now right click on the folder name and select the `New File` option to create a new test file. Save it as `index.js` Now import the generated NodeJS library using the following lines of code:

```js
var lib = require('lib');
```

Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=Salesforce%20Marketing%20Cloud-Node)

![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=Salesforce%20Marketing%20Cloud-Node)

### 3. Running The Test File

To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:

```
node index.js
```

![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=Salesforce%20Marketing%20Cloud-Node)


## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2 (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3 (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  Salesforce Marketing CloudController`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.

![Run Tests](https://apidocs.io/illustration/nodejs?step=runTests&controllerName=Salesforce%20Marketing%20CloudController)

## Initialization

### Authentication
In order to setup authentication in the API client, you need the following information.

| Parameter | Description |
|-----------|-------------|
| oAuthAccessToken | OAuth 2.0 Access Token |



API client can be initialized as following:

```JavaScript
const lib = require('lib');

// Configuration parameters and credentials
lib.Configuration.oAuthAccessToken = "oAuthAccessToken"; // OAuth 2.0 Access Token

```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [SFMCPlatformController](#sfmc_platform_controller)
* [SFMCDataEventsSynchronousController](#sfmc_data_events_synchronous_controller)
* [SFMCDataEventsAsynchronousController](#sfmc_data_events_asynchronous_controller)
* [SFMCAssetsController](#sfmc_assets_controller)
* [SFMCContactsController](#sfmc_contacts_controller)
* [SFMCCampaignsController](#sfmc_campaigns_controller)
* [SFMCAnalyticsController](#sfmc_analytics_controller)
* [SFMCAddressController](#sfmc_address_controller)
* [AuthController](#auth_controller)
* [SFMCPushController](#sfmc_push_controller)
* [SFMCMessagingController](#sfmc_messaging_controller)
* [SFMCSOAPSubscribersController](#sfmcsoap_subscribers_controller)
* [SFMCSOAPTrackingEmailController](#sfmcsoap_tracking_email_controller)
* [SFMCSOAPListsController](#sfmcsoap_lists_controller)
* [SFMCSOAPEmailSendDefinitionController](#sfmcsoap_email_send_definition_controller)
* [SFMCSOAPEmailController](#sfmcsoap_email_controller)
* [SFMCSOAPDataExtensionsController](#sfmcsoap_data_extensions_controller)
* [SFMCLocationController](#sfmc_location_controller)
* [SFMCEventsController](#sfmc_events_controller)
* [SFMCInteractionsController](#sfmc_interactions_controller)
* [SFMCSOAPAutomationController](#sfmcsoap_automation_controller)
* [SFMCSOAPAdministrationController](#sfmcsoap_administration_controller)
* [SFMCRESTAPIQueriesController](#sfmcrestapi_queries_controller)
* [SocialStudioAuthorsController](#social_studio_authors_controller)
* [SFMCSOAPTriggeredEmailController](#sfmcsoap_triggered_email_controller)
* [SocialStudioClientsController](#social_studio_clients_controller)
* [SocialStudioEngageMacrosController](#social_studio_engage_macros_controller)
* [SocialStudioImportedPublishedPostMetricsController](#social_studio_imported_published_post_metrics_controller)
* [SocialStudioKeywordGroupsController](#social_studio_keyword_groups_controller)
* [SocialStudioLanguagesController](#social_studio_languages_controller)
* [SocialStudioMediatypesController](#social_studio_mediatypes_controller)
* [SocialStudioPostController](#social_studio_post_controller)
* [SocialStudioPublishApprovalRulesController](#social_studio_publish_approval_rules_controller)
* [SocialStudioPublishLabelsController](#social_studio_publish_labels_controller)
* [SocialStudioRegionsController](#social_studio_regions_controller)
* [SocialStudioSharedContentClipsController](#social_studio_shared_content_clips_controller)
* [SocialStudioShortURLsController](#social_studio_short_ur_ls_controller)
* [SocialStudioSocialAccountsController](#social_studio_social_accounts_controller)
* [SocialStudioSourcesAndSourceGroupsController](#social_studio_sources_and_source_groups_controller)
* [SocialStudioTopicProfilesController](#social_studio_topic_profiles_controller)
* [SocialStudioUsersController](#social_studio_users_controller)
* [SocialStudioWorkspacesController](#social_studio_workspaces_controller)

## <a name="sfmc_platform_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SFMCPlatformController") SFMCPlatformController

### Get singleton instance

The singleton instance of the ``` SFMCPlatformController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SFMCPlatformController;
```

### <a name="retrieve_endpoints"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCPlatformController.retrieveEndpoints") retrieveEndpoints

> Gets endpoint data


```javascript
function retrieveEndpoints(callback)
```

#### Example Usage

```javascript


    controller.retrieveEndpoints(function(error, response, context) {

    
    });
```



### <a name="get_token_context"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCPlatformController.getTokenContext") getTokenContext

> Returns information about the authenticated token


```javascript
function getTokenContext(callback)
```

#### Example Usage

```javascript


    controller.getTokenContext(function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="sfmc_data_events_synchronous_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SFMCDataEventsSynchronousController") SFMCDataEventsSynchronousController

### Get singleton instance

The singleton instance of the ``` SFMCDataEventsSynchronousController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SFMCDataEventsSynchronousController;
```

### <a name="update_increment_column_key"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCDataEventsSynchronousController.updateIncrementColumnKey") updateIncrementColumnKey

> Upserts a data extension row by key.


```javascript
function updateIncrementColumnKey(step, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| step |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var step = 2;
    var contentType = 'application/json';
    var body = new IncrementColumnKeyRequest({"values":{"LastLogin":"2013-05-23T14:32:00Z","IsActive":true,"FirstName":"John","FollowerCount":2,"LastName":"Smith"}});

    controller.updateIncrementColumnKey(step, contentType, body, function(error, response, context) {

    
    });
```



### <a name="update_upsert_row_object_id"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCDataEventsSynchronousController.updateUpsertRowObjectID") updateUpsertRowObjectID

> Upserts a data extension row by object id.


```javascript
function updateUpsertRowObjectID(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';
    var body = new UpsertRowObjectIDRequest({"values":{"LastLogin":"2013-05-23T14:32:00Z","IsActive":true,"FirstName":"John","FollowerCount":2,"LastName":"Smith"}});

    controller.updateUpsertRowObjectID(contentType, body, function(error, response, context) {

    
    });
```



### <a name="update_upsert_row_key"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCDataEventsSynchronousController.updateUpsertRowKey") updateUpsertRowKey

> Upserts a data extension row by key.


```javascript
function updateUpsertRowKey(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';
    var body = new UpsertRowKeyRequest({"values":{"LastLogin":"2013-05-23T14:32:00Z","IsActive":true,"FirstName":"John","FollowerCount":2,"LastName":"Smith"}});

    controller.updateUpsertRowKey(contentType, body, function(error, response, context) {

    
    });
```



### <a name="create_upsert_row_set_key"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCDataEventsSynchronousController.createUpsertRowSetKey") createUpsertRowSetKey

> Upserts a batch of data extension rows by key.


```javascript
function createUpsertRowSetKey(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  ``` Collection ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';
    var body = [{"keys":{"Email":"someone@email.com"},"values":{"LastLogin":"2013-05-23T14:32:00Z","IsActive":true,"FirstName":"John","FollowerCount":2,"LastName":"Smith"}},{"keys":{"Email":"someone2@email.com"},"values":{"LastLogin":"2013-05-23T14:32:00Z","IsActive":true,"FirstName":"Jane","FollowerCount":2,"LastName":"Smith"}}].map(function(elem) {
        return new UpsertRowSetKeyRequest(elem);
    });

    controller.createUpsertRowSetKey(contentType, body, function(error, response, context) {

    
    });
```



### <a name="create_upsert_row_set_object_id"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCDataEventsSynchronousController.createUpsertRowSetObjectID") createUpsertRowSetObjectID

> Upserts a batch of data extension rows by object id.


```javascript
function createUpsertRowSetObjectID(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  ``` Collection ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';
    var body = [{"keys":{"Email":"someone@email.com"},"values":{"LastLogin":"2013-05-23T14:32:00Z","IsActive":true,"FirstName":"John","FollowerCount":2,"LastName":"Smith"}},{"keys":{"Email":"someone2@email.com"},"values":{"LastLogin":"2013-05-23T14:32:00Z","IsActive":true,"FirstName":"Jane","FollowerCount":2,"LastName":"Smith"}}].map(function(elem) {
        return new UpsertRowSetObjectIDRequest(elem);
    });

    controller.createUpsertRowSetObjectID(contentType, body, function(error, response, context) {

    
    });
```



### <a name="update_increment_column_object_id"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCDataEventsSynchronousController.updateIncrementColumnObjectID") updateIncrementColumnObjectID

> Upserts a data extension row by object id.


```javascript
function updateIncrementColumnObjectID(step, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| step |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var step = 2;
    var contentType = 'application/json';
    var body = new IncrementColumnObjectIDRequest({"values":{"LastLogin":"2013-05-23T14:32:00Z","IsActive":true,"FirstName":"John","FollowerCount":2,"LastName":"Smith"}});

    controller.updateIncrementColumnObjectID(step, contentType, body, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="sfmc_data_events_asynchronous_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SFMCDataEventsAsynchronousController") SFMCDataEventsAsynchronousController

### Get singleton instance

The singleton instance of the ``` SFMCDataEventsAsynchronousController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SFMCDataEventsAsynchronousController;
```

### <a name="update_increment_column_object_id"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCDataEventsAsynchronousController.updateIncrementColumnObjectID") updateIncrementColumnObjectID

> Upserts a data extension row by object id.


```javascript
function updateIncrementColumnObjectID(step, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| step |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var step = 2;
    var contentType = 'application/json';
    var body = new IncrementColumnObjectIDRequest({"values":{"LastLogin":"2013-05-23T14:32:00Z","IsActive":true,"FirstName":"John","FollowerCount":2,"LastName":"Smith"}});

    controller.updateIncrementColumnObjectID(step, contentType, body, function(error, response, context) {

    
    });
```



### <a name="update_increment_column_key"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCDataEventsAsynchronousController.updateIncrementColumnKey") updateIncrementColumnKey

> Upserts a data extension row by key.


```javascript
function updateIncrementColumnKey(step, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| step |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var step = 2;
    var contentType = 'application/json';
    var body = new IncrementColumnKeyRequest({"values":{"LastLogin":"2013-05-23T14:32:00Z","IsActive":true,"FirstName":"John","FollowerCount":2,"LastName":"Smith"}});

    controller.updateIncrementColumnKey(step, contentType, body, function(error, response, context) {

    
    });
```



### <a name="update_upsert_row_object_id"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCDataEventsAsynchronousController.updateUpsertRowObjectID") updateUpsertRowObjectID

> Upserts a data extension row by object id.


```javascript
function updateUpsertRowObjectID(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';
    var body = new UpsertRowObjectIDRequest({"values":{"LastLogin":"2013-05-23T14:32:00Z","IsActive":true,"FirstName":"John","FollowerCount":2,"LastName":"Smith"}});

    controller.updateUpsertRowObjectID(contentType, body, function(error, response, context) {

    
    });
```



### <a name="update_upsert_row_key"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCDataEventsAsynchronousController.updateUpsertRowKey") updateUpsertRowKey

> Upserts a data extension row by key.


```javascript
function updateUpsertRowKey(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';
    var body = new UpsertRowKeyRequest({"values":{"LastLogin":"2013-05-23T14:32:00Z","IsActive":true,"FirstName":"John","FollowerCount":2,"LastName":"Smith"}});

    controller.updateUpsertRowKey(contentType, body, function(error, response, context) {

    
    });
```



### <a name="create_upsert_row_set_key"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCDataEventsAsynchronousController.createUpsertRowSetKey") createUpsertRowSetKey

> Upserts a batch of data extension rows by key.


```javascript
function createUpsertRowSetKey(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  ``` Collection ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';
    var body = [{"keys":{"Email":"someone@email.com"},"values":{"LastLogin":"2013-05-23T14:32:00Z","IsActive":true,"FirstName":"John","FollowerCount":2,"LastName":"Smith"}},{"keys":{"Email":"someone2@email.com"},"values":{"LastLogin":"2013-05-23T14:32:00Z","IsActive":true,"FirstName":"Jane","FollowerCount":2,"LastName":"Smith"}}].map(function(elem) {
        return new UpsertRowSetKeyRequest(elem);
    });

    controller.createUpsertRowSetKey(contentType, body, function(error, response, context) {

    
    });
```



### <a name="create_upsert_row_set_object_id"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCDataEventsAsynchronousController.createUpsertRowSetObjectID") createUpsertRowSetObjectID

> Upserts a batch of data extension rows by object id.


```javascript
function createUpsertRowSetObjectID(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  ``` Collection ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';
    var body = [{"keys":{"Email":"someone@email.com"},"values":{"LastLogin":"2013-05-23T14:32:00Z","IsActive":true,"FirstName":"John","FollowerCount":2,"LastName":"Smith"}},{"keys":{"Email":"someone2@email.com"},"values":{"LastLogin":"2013-05-23T14:32:00Z","IsActive":true,"FirstName":"Jane","FollowerCount":2,"LastName":"Smith"}}].map(function(elem) {
        return new UpsertRowSetObjectIDRequest(elem);
    });

    controller.createUpsertRowSetObjectID(contentType, body, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="sfmc_assets_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SFMCAssetsController") SFMCAssetsController

### Get singleton instance

The singleton instance of the ``` SFMCAssetsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SFMCAssetsController;
```

### <a name="get_schemas"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCAssetsController.getSchemas") getSchemas

> TODO: Add Description


```javascript
function getSchemas(contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';

    controller.getSchemas(contentType, function(error, response, context) {

    
    });
```



### <a name="get_asset_collection"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCAssetsController.getAssetCollection") getAssetCollection

> TODO: Add Description


```javascript
function getAssetCollection(contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';

    controller.getAssetCollection(contentType, function(error, response, context) {

    
    });
```



### <a name="get_asset_by_id"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCAssetsController.getAssetByID") getAssetByID

> TODO: Add Description


```javascript
function getAssetByID(contentType, id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'Content-Type';
    var id = 'Id';

    controller.getAssetByID(contentType, id, function(error, response, context) {

    
    });
```



### <a name="get_discovery"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCAssetsController.getDiscovery") getDiscovery

> TODO: Add Description


```javascript
function getDiscovery(contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';

    controller.getDiscovery(contentType, function(error, response, context) {

    
    });
```



### <a name="create_asset"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCAssetsController.createAsset") createAsset

> The contact resource allows you to create a new contact with the specified information in the specified attribute groups.


```javascript
function createAsset(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';
    var body = new AssetRequest({"contactKey":"123456","contactId":"null","attributeSets":[{"name":"Email Addresses","items":[{"values":[{"name":"Email Address","value":"dummy@mail.com"}]}]},{"name":"Email Demographics","items":[{"values":[{"name":"Last Name","value":"{{lastName}}"},{"name":"First Name","value":"{{firstName}}"},{"name":"Text Profile Attribute","value":"value 1"},{"name":"Number Profile Attribute","value":"12345"}]}]},{"name":"MobileConnect Demographics","items":[{"values":[{"name":"Mobile Number","value":"555-555-5555"}]}]},{"name":"MobilePush Demographics","items":[{"values":[{"name":"Device ID","value":"958405948"},{"name":"Application","value":"958405948"}]}]}]});

    controller.createAsset(contentType, body, function(error, response, context) {

    
    });
```



### <a name="create_contact"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCAssetsController.createContact") createContact

> The contact resource allows you to create a new contact with the specified information in the specified attribute groups.


```javascript
function createContact(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';
    var body = new CreateContactRequest({"contactKey":"123456","contactId":"null","attributeSets":[{"name":"Email Addresses","items":[{"values":[{"name":"Email Address","value":"dummy@mail.com"}]}]},{"name":"Email Demographics","items":[{"values":[{"name":"Last Name","value":"{{lastName}}"},{"name":"First Name","value":"{{firstName}}"},{"name":"Text Profile Attribute","value":"value 1"},{"name":"Number Profile Attribute","value":"12345"}]}]},{"name":"MobileConnect Demographics","items":[{"values":[{"name":"Mobile Number","value":"555-555-5555"}]}]},{"name":"MobilePush Demographics","items":[{"values":[{"name":"Device ID","value":"958405948"},{"name":"Application","value":"958405948"}]}]}]});

    controller.createContact(contentType, body, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="sfmc_contacts_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SFMCContactsController") SFMCContactsController

### Get singleton instance

The singleton instance of the ``` SFMCContactsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SFMCContactsController;
```

### <a name="get_attribute_groups"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCContactsController.getAttributeGroups") getAttributeGroups

> TODO: Add Description


```javascript
function getAttributeGroups(contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';

    controller.getAttributeGroups(contentType, function(error, response, context) {

    
    });
```



### <a name="get_schemas"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCContactsController.getSchemas") getSchemas

> TODO: Add Description


```javascript
function getSchemas(contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';

    controller.getSchemas(contentType, function(error, response, context) {

    
    });
```



### <a name="get_discovery"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCContactsController.getDiscovery") getDiscovery

> TODO: Add Description


```javascript
function getDiscovery(contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';

    controller.getDiscovery(contentType, function(error, response, context) {

    
    });
```



### <a name="create_contact"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCContactsController.createContact") createContact

> The contact resource allows you to create a new contact with the specified information in the specified attribute groups.


```javascript
function createContact(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';
    var body = new CreateContactRequest({"contactKey":"123456","contactId":"null","attributeSets":[{"name":"Email Addresses","items":[{"values":[{"name":"Email Address","value":"dummy@mail.com"}]}]},{"name":"Email Demographics","items":[{"values":[{"name":"Last Name","value":"{{lastName}}"},{"name":"First Name","value":"{{firstName}}"},{"name":"Text Profile Attribute","value":"value 1"},{"name":"Number Profile Attribute","value":"12345"}]}]},{"name":"MobileConnect Demographics","items":[{"values":[{"name":"Mobile Number","value":"555-555-5555"}]}]},{"name":"MobilePush Demographics","items":[{"values":[{"name":"Device ID","value":"958405948"},{"name":"Application","value":"958405948"}]}]}]});

    controller.createContact(contentType, body, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="sfmc_campaigns_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SFMCCampaignsController") SFMCCampaignsController

### Get singleton instance

The singleton instance of the ``` SFMCCampaignsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SFMCCampaignsController;
```

### <a name="delete_unassociate_asset_from_campaign"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCCampaignsController.deleteUnassociateAssetFromCampaign") deleteUnassociateAssetFromCampaign

> Unassociate an asset from a Campaign
> 
> https://code.exacttarget.com/apis-sdks/rest-api/v1/hub/campaigns/unnassociateAssetToCampaign.html


```javascript
function deleteUnassociateAssetFromCampaign(contentType, campaignID, assetID, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| campaignID |  ``` Required ```  | TODO: Add a parameter description |
| assetID |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'Content-Type';
    var campaignID = 'campaignID';
    var assetID = 'assetID';

    controller.deleteUnassociateAssetFromCampaign(contentType, campaignID, assetID, function(error, response, context) {

    
    });
```



### <a name="delete_campaign"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCCampaignsController.deleteCampaign") deleteCampaign

> Delete a campaign by ID


```javascript
function deleteCampaign(contentType, campaignID, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| campaignID |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'Content-Type';
    var campaignID = 'campaignID';

    controller.deleteCampaign(contentType, campaignID, function(error, response, context) {

    
    });
```



### <a name="create_a_campaign"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCCampaignsController.createACampaign") createACampaign

> Name of the campaign
> Description
> Campaign Code
> Color 
> Favorite
> 
> {
>     "name": "Annual Sale 2012",
>     "description": "Yearly sale",
>     "campaignCode": "annual2012",
>     "color": "0000ff",
>     "favorite": false
> }
> 
> https://code.exacttarget.com/apis-sdks/rest-api/v1/hub/campaigns/createCampaign.html


```javascript
function createACampaign(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';
    var body = new CreateACampaignRequest({"name":"Annual Sale 2016","description":"Yearly sale","campaignCode":"annual2016","color":"0000ff","favorite":false});

    controller.createACampaign(contentType, body, function(error, response, context) {

    
    });
```



### <a name="retrieve_campaign_assets"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCCampaignsController.retrieveCampaignAssets") retrieveCampaignAssets

> Retrieve all assets associated with a campaign
> 
> https://code.exacttarget.com/apis-sdks/rest-api/v1/hub/campaigns/getCampaignAssetCollection.html


```javascript
function retrieveCampaignAssets(contentType, campaignID, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| campaignID |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'Content-Type';
    var campaignID = 'campaignID';

    controller.retrieveCampaignAssets(contentType, campaignID, function(error, response, context) {

    
    });
```



### <a name="get_retrive_campaign_asset"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCCampaignsController.getRetriveCampaignAsset") getRetriveCampaignAsset

> https://code.exacttarget.com/apis-sdks/rest-api/v1/hub/campaigns/getCampaignAsset.html


```javascript
function getRetriveCampaignAsset(contentType, campaignID, assetID, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| campaignID |  ``` Required ```  | TODO: Add a parameter description |
| assetID |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'Content-Type';
    var campaignID = 'campaignID';
    var assetID = 'assetID';

    controller.getRetriveCampaignAsset(contentType, campaignID, assetID, function(error, response, context) {

    
    });
```



### <a name="retrieve_all_campaigns"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCCampaignsController.retrieveAllCampaigns") retrieveAllCampaigns

> Retrieve a collection of Campaigns
> 
> page, pageSize, orderBy available to include in URL.
> 
> ?$page=1&$pageSize=2&$orderBy=Name ASC
> 
> https://code.exacttarget.com/apis-sdks/rest-api/v1/hub/campaigns/getCampaignCollection.html


```javascript
function retrieveAllCampaigns(contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';

    controller.retrieveAllCampaigns(contentType, function(error, response, context) {

    
    });
```



### <a name="retrieve_campaign_by_id"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCCampaignsController.retrieveCampaignByID") retrieveCampaignByID

> Retrieve a Campaign
> 
> https://code.exacttarget.com/apis-sdks/rest-api/v1/hub/campaigns/getCampaign.html


```javascript
function retrieveCampaignByID(contentType, campaignID, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| campaignID |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'Content-Type';
    var campaignID = 'campaignID';

    controller.retrieveCampaignByID(contentType, campaignID, function(error, response, context) {

    
    });
```



### <a name="create_associate_asset_s_to_a_campaign"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCCampaignsController.createAssociateAssetSToACampaign") createAssociateAssetSToACampaign

> Associate Asset(s) to an existing Campaign
> 
> Options for the array: email, automation_definition, calendar_event, triggered, list, group, data_extension, sendable_custom_object, landing_page, facebook_tab, ct_facebook_post, ct_twitter_post, sms_message, push_message
> 
> https://code.exacttarget.com/apis-sdks/rest-api/v1/hub/campaigns/associateAssetToCampaign.html


```javascript
function createAssociateAssetSToACampaign(contentType, body, campaignID, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |
| campaignID |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'Content-Type';
    var body = new AssociateAssetSToACampaignRequest({"key":"value"});
    var campaignID = 'campaignID';

    controller.createAssociateAssetSToACampaign(contentType, body, campaignID, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="sfmc_analytics_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SFMCAnalyticsController") SFMCAnalyticsController

### Get singleton instance

The singleton instance of the ``` SFMCAnalyticsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SFMCAnalyticsController;
```

### <a name="create_analytic_event"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCAnalyticsController.createAnalyticEvent") createAnalyticEvent

> TODO: Add Description


```javascript
function createAnalyticEvent(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';
    var body = '  {\n    "etAppId": "",\n    "deviceId": "",\n    "eventDate": "",\n    "analyticTypes": [\n        1, 2, 5\n    ],\n    "objectIds": [\n        "[MjM0OjExNDow]"\n    ],\n    "value": 123\n  },\n  {\n    "etAppId": "",\n    "deviceId": "",\n    "eventDate": "[2013-07-11T09:34:55.547Z]",\n    "analyticTypes": [\n        1, 2, 6\n    ],\n    "objectIds": [\n        "[MjQ1OjExNDow]",\n        "[MTU6MTI4OjA]"\n    ]\n  }';

    controller.createAnalyticEvent(contentType, body, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="sfmc_address_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SFMCAddressController") SFMCAddressController

### Get singleton instance

The singleton instance of the ``` SFMCAddressController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SFMCAddressController;
```

### <a name="create_validate_email"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCAddressController.createValidateEmail") createValidateEmail

> To validate an email address, 
> perform an HTTP POST specifying the email address and 
> validators to be used in the payload of the HTTP POST. 
> You can use more than one validator in the same call.
> 
> https://code.exacttarget.com/apis-sdks/rest-api/v1/address/validateEmail.html


```javascript
function createValidateEmail(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';
    var body = new ValidateEmailRequest({"email":"help@example.com","validators":["SyntaxValidator","MXValidator","ListDetectiveValidator"]});

    controller.createValidateEmail(contentType, body, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="auth_controller"></a>![Class: ](https://apidocs.io/img/class.png ".AuthController") AuthController

### Get singleton instance

The singleton instance of the ``` AuthController ``` class can be accessed from the API Client.

```javascript
var controller = lib.AuthController;
```

### <a name="create_request_sfmc_token"></a>![Method: ](https://apidocs.io/img/method.png ".AuthController.createRequestSFMCToken") createRequestSFMCToken

> *Tags:*  ``` Skips Authentication ``` 

> To obtain an OAuth token, perform a HTTP POST specifying your clientID and clientSecret in the payload.
> 
> https://code.exacttarget.com/apis-sdks/rest-api/v1/auth/requestToken.html


```javascript
function createRequestSFMCToken(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';
    var body = new RequestSFMCTokenRequest({"clientId":"{{clientId}}","clientSecret":"{{clientSecret}}"});

    controller.createRequestSFMCToken(contentType, body, function(error, response, context) {

    
    });
```



### <a name="create_request_social_api_token"></a>![Method: ](https://apidocs.io/img/method.png ".AuthController.createRequestSocialAPIToken") createRequestSocialAPIToken

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add Description


```javascript
function createRequestSocialAPIToken(grantType, clientId, clientSecret, username, password, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| grantType |  ``` Required ```  | TODO: Add a parameter description |
| clientId |  ``` Required ```  | TODO: Add a parameter description |
| clientSecret |  ``` Required ```  | TODO: Add a parameter description |
| username |  ``` Required ```  | TODO: Add a parameter description |
| password |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var grantType = password;
    var clientId = {{socialClientKey}};
    var clientSecret = {{socialClientSecret}};
    var username = '{{r6username}}';
    var password = '{{r6password}}';

    controller.createRequestSocialAPIToken(grantType, clientId, clientSecret, username, password, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="sfmc_push_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SFMCPushController") SFMCPushController

### Get singleton instance

The singleton instance of the ``` SFMCPushController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SFMCPushController;
```

### <a name="create_push_send_by_message_id"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCPushController.createPushSendByMessageId") createPushSendByMessageId

> TODO: Add Description


```javascript
function createPushSendByMessageId(contentType, body, messageSendId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |
| messageSendId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'Content-Type';
    var body = new PushSendByMessageIdRequest({"key":"value"});
    var messageSendId = 'messageSendId';

    controller.createPushSendByMessageId(contentType, body, messageSendId, function(error, response, context) {

    
    });
```



### <a name="create_broadcast_push"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCPushController.createBroadcastPush") createBroadcastPush

> Send a push to all of the active devices.


```javascript
function createBroadcastPush(contentType, messageSendId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| messageSendId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'Content-Type';
    var messageSendId = 'messageSendId';

    controller.createBroadcastPush(contentType, messageSendId, function(error, response, context) {

    
    });
```



### <a name="get_broadcast_push_status"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCPushController.getBroadcastPushStatus") getBroadcastPushStatus

> TODO: Add Description


```javascript
function getBroadcastPushStatus(contentType, messageSendId, tokenId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| messageSendId |  ``` Required ```  | TODO: Add a parameter description |
| tokenId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'Content-Type';
    var messageSendId = 'messageSendId';
    var tokenId = 'tokenId';

    controller.getBroadcastPushStatus(contentType, messageSendId, tokenId, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="sfmc_messaging_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SFMCMessagingController") SFMCMessagingController

### Get singleton instance

The singleton instance of the ``` SFMCMessagingController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SFMCMessagingController;
```

### <a name="create_message_definition_send_email"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCMessagingController.createMessageDefinitionSendEmail") createMessageDefinitionSendEmail

> initates a message to one email address


```javascript
function createMessageDefinitionSendEmail(contentType, body, emailTSDCustomerKey, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |
| emailTSDCustomerKey |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'Content-Type';
    var body = new MessageDefinitionSendEmailRequest({"key":"value"});
    var emailTSDCustomerKey = 'emailTSDCustomerKey';

    controller.createMessageDefinitionSendEmail(contentType, body, emailTSDCustomerKey, function(error, response, context) {

    
    });
```



### <a name="create_queue_mo"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCMessagingController.createQueueMO") createQueueMO

> queues an MO


```javascript
function createQueueMO(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';
    var body = new QueueMORequest({"subscribers":[{"mobilenumber":"15550001111","subscriberkey":"subkey_001"}],"shortCode":"64586","messageText":"GIF"});

    controller.createQueueMO(contentType, body, function(error, response, context) {

    
    });
```



### <a name="create_message"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCMessagingController.createMessage") createMessage

> Create a message placeholder in the MarketingCloud


```javascript
function createMessage(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';
    var body = new CreateMessageRequest({"messageType":1,"contentType":1,"sendIndicator":1,"status":1,"startDate":"2014-12-10T14:50:00Z","sendInitiator":1,"name":"API Created Message 6","application":{"id":"5248db1e-cac2-4cc8-a587-cb9875bdbd60","name":"Public Demo Application"},"alert":"Alert message to show on device","sound":"default","badge":"+1","contentAvailable":1,"openDirect":"http://www.url.com/","keys":[{"key":"locationid","value":"582"}],"IncludedAudiences":[{"id":"VE1aTk5qeU5FZVNZQlhqanRRdFBBQTo2Mzow"}]});

    controller.createMessage(contentType, body, function(error, response, context) {

    
    });
```



### <a name="get_queue_mo_history_token_id"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCMessagingController.getQueueMOHistoryTokenId") getQueueMOHistoryTokenId

> retrieves the tracking history of a queued MO


```javascript
function getQueueMOHistoryTokenId(contentType, tokenId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| tokenId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'Content-Type';
    var tokenId = 'tokenId';

    controller.getQueueMOHistoryTokenId(contentType, tokenId, function(error, response, context) {

    
    });
```



### <a name="get_message_status"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCMessagingController.getMessageStatus") getMessageStatus

> retrieves the status of a message to a contact


```javascript
function getMessageStatus(contentType, messageId, tokenId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| messageId |  ``` Required ```  | TODO: Add a parameter description |
| tokenId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'Content-Type';
    var messageId = 'messageId';
    var tokenId = 'tokenId';

    controller.getMessageStatus(contentType, messageId, tokenId, function(error, response, context) {

    
    });
```



### <a name="get_message_contact_message_id_history"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCMessagingController.getMessageContactMessageIDHistory") getMessageContactMessageIDHistory

> retrieves the tracking history of a message to a mobile number


```javascript
function getMessageContactMessageIDHistory(contentType, messageId, tokenId, phoneNumber, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| messageId |  ``` Required ```  | TODO: Add a parameter description |
| tokenId |  ``` Required ```  | TODO: Add a parameter description |
| phoneNumber |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'Content-Type';
    var messageId = 'messageId';
    var tokenId = 'tokenId';
    var phoneNumber = 'phoneNumber';

    controller.getMessageContactMessageIDHistory(contentType, messageId, tokenId, phoneNumber, function(error, response, context) {

    
    });
```



### <a name="create_message_send"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCMessagingController.createMessageSend") createMessageSend

> initates a message to one or more mobile numbers


```javascript
function createMessageSend(contentType, body, messageId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |
| messageId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'Content-Type';
    var body = new MessageSendRequest({"key":"value"});
    var messageId = 'messageId';

    controller.createMessageSend(contentType, body, messageId, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="sfmcsoap_subscribers_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SFMCSOAPSubscribersController") SFMCSOAPSubscribersController

### Get singleton instance

The singleton instance of the ``` SFMCSOAPSubscribersController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SFMCSOAPSubscribersController;
```

### <a name="create_subscribers_retrieve_token"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCSOAPSubscribersController.createSubscribersRetrieveToken") createSubscribersRetrieveToken

> TODO: Add Description


```javascript
function createSubscribersRetrieveToken(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'text/xml';
    var body = '<?xml version="1.0" encoding="UTF-8"?>\n<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">\n   <s:Header>\n      <a:Action s:mustUnderstand="1">Retrieve</a:Action>\n      <a:MessageID>urn:uuid:7e0cca04-57bd-4481-864c-6ea8039d2ea0</a:MessageID>\n      <a:ReplyTo>\n         <a:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</a:Address>\n      </a:ReplyTo>\n      <a:To s:mustUnderstand="1">{{soapEndPoint}}</a:To>\n      <fueloauth xmlns="http://exacttarget.com">{{accessToken}}</fueloauth>\n   </s:Header>\n   <s:Body xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">\n      <RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">\n         <RetrieveRequest>\n            <ObjectType>Subscriber</ObjectType>\n            <Properties>SubscriberKey</Properties>\n            <Properties>EmailAddress</Properties>\n            <Properties>Status</Properties>\n            <Filter xmlns:q1="http://exacttarget.com/wsdl/partnerAPI" xsi:type="q1:SimpleFilterPart">\n               <q1:Property>SubscriberKey</q1:Property>\n               <q1:SimpleOperator>equals</q1:SimpleOperator>\n               <q1:Value>subkey_001</q1:Value>\n            </Filter>\n         </RetrieveRequest>\n      </RetrieveRequestMsg>\n   </s:Body>\n</s:Envelope>';

    controller.createSubscribersRetrieveToken(contentType, body, function(error, response, context) {

    
    });
```



### <a name="create_subscriber_create_up"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCSOAPSubscribersController.createSubscriberCreateUP") createSubscriberCreateUP

> TODO: Add Description


```javascript
function createSubscriberCreateUP(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'text/xml';
    var body = '<?xml version="1.0" encoding="UTF-8"?>\n<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">\n    <s:Header>\n        <a:Action s:mustUnderstand="1">Create</a:Action>\n        <a:MessageID>urn:uuid:7e0cca04-57bd-4481-864c-6ea8039d2ea0</a:MessageID>\n        <a:ReplyTo>\n            <a:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</a:Address>\n        </a:ReplyTo>\n        <a:To s:mustUnderstand="1">{{soapEndPoint}}</a:To>\n        <o:Security xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" s:mustUnderstand="1">\n            <o:UsernameToken>\n                <o:Username>{{soapUsername}}</o:Username>\n                <o:Password><![CDATA[{{soapPassword}}]]></o:Password>\n            </o:UsernameToken>\n        </o:Security>\n    </s:Header>\n    <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">\n        <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">\n            <Options>\n                <SaveOptions>\n                    <SaveOption>\n                        <PropertyName>*</PropertyName>\n                        <SaveAction>UpdateAdd</SaveAction>\n                    </SaveOption>\n                </SaveOptions>\n                <!--\n                <RequestType>Asynchronous</RequestType>\n                <QueuePriority>High</QueuePriority>\n                <SendResponseTo>\n                    <ResponseType>email</ResponseType>\n                    <ResponseAddress>your_address@salesforce.com</ResponseAddress>\n                    <RespondWhen>OnCallComplete</RespondWhen>\n                    <IncludeResults>true</IncludeResults>\n                    <IncludeObjects>true</IncludeObjects>\n  \t\t        </SendResponseTo>\n                -->\n            </Options>\n            <Objects xsi:type="Subscriber">\n                <!--\n                  <Client><ID>1084813</ID>\n                  </Client>\n                -->\n                <SubscriberKey>subkey_001</SubscriberKey>\n                <EmailAddress>your_address@salesforce.com</EmailAddress>\n            </Objects>\n        </CreateRequest>\n    </s:Body>\n</s:Envelope>';

    controller.createSubscriberCreateUP(contentType, body, function(error, response, context) {

    
    });
```



### <a name="create_subscriber_retrieve_up"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCSOAPSubscribersController.createSubscriberRetrieveUP") createSubscriberRetrieveUP

> TODO: Add Description


```javascript
function createSubscriberRetrieveUP(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'text/xml';
    var body = '<?xml version="1.0" encoding="UTF-8"?>\n<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">\n   <s:Header>\n      <a:Action s:mustUnderstand="1">Retrieve</a:Action>\n      <a:MessageID>urn:uuid:7e0cca04-57bd-4481-864c-6ea8039d2ea0</a:MessageID>\n      <a:ReplyTo>\n         <a:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</a:Address>\n      </a:ReplyTo>\n      <a:To s:mustUnderstand="1">{{soapEndPoint}}</a:To>\n      <o:Security xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" s:mustUnderstand="1">\n         <o:UsernameToken>\n            <o:Username>{{soapUsername}}</o:Username>\n            <o:Password><![CDATA[{{soapPassword}}]]></o:Password>\n         </o:UsernameToken>\n      </o:Security>\n   </s:Header>\n   <s:Body xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">\n      <RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">\n         <RetrieveRequest>\n            <ObjectType>Subscriber</ObjectType>\n            <Properties>SubscriberKey</Properties>\n            <Properties>EmailAddress</Properties>\n            <Properties>Status</Properties>\n            <Filter xmlns:q1="http://exacttarget.com/wsdl/partnerAPI" xsi:type="q1:SimpleFilterPart">\n               <q1:Property>SubscriberKey</q1:Property>\n               <q1:SimpleOperator>equals</q1:SimpleOperator>\n               <q1:Value>subkey_001</q1:Value>\n            </Filter>\n         </RetrieveRequest>\n      </RetrieveRequestMsg>\n   </s:Body>\n</s:Envelope>';

    controller.createSubscriberRetrieveUP(contentType, body, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="sfmcsoap_tracking_email_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SFMCSOAPTrackingEmailController") SFMCSOAPTrackingEmailController

### Get singleton instance

The singleton instance of the ``` SFMCSOAPTrackingEmailController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SFMCSOAPTrackingEmailController;
```

### <a name="create_send_retrieve_tracking_up"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCSOAPTrackingEmailController.createSendRetrieveTrackingUP") createSendRetrieveTrackingUP

> Retrieve High Level Send Data


```javascript
function createSendRetrieveTrackingUP(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'text/xml';
    var body = '<?xml version="1.0" encoding="UTF-8"?>\n<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">\n   <s:Header>\n      <a:Action s:mustUnderstand="1">Retrieve</a:Action>\n      <a:MessageID>urn:uuid:7e0cca04-57bd-4481-864c-6ea8039d2ea0</a:MessageID>\n      <a:ReplyTo>\n         <a:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</a:Address>\n      </a:ReplyTo>\n      <a:To s:mustUnderstand="1">{{soapEndPoint}}</a:To>\n      <o:Security xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" s:mustUnderstand="1">\n         <o:UsernameToken>\n            <o:Username>{{soapUsername}}</o:Username>\n            <o:Password><![CDATA[{{soapPassword}}]]></o:Password>\n         </o:UsernameToken>\n      </o:Security>\n   </s:Header>\n   <s:Body xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">\n      <RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">\n         <RetrieveRequest>\n            <!--\n             <ClientIDs>\n                <ID>1340293</ID>\n             </ClientIDs>\n             <QueryAllAccounts>true</QueryAllAccounts>\n            -->\n            <ObjectType>Send</ObjectType>\n            <Properties>ID</Properties>\n            <Properties>EmailName</Properties>\n            <Properties>Subject</Properties>\n            <Properties>SendDate</Properties>\n            <Properties>FromName</Properties>\n            <Properties>FromAddress</Properties>\n            <Properties>UniqueOpens</Properties>\n            <Properties>UniqueClicks</Properties>\n            <Properties>Unsubscribes</Properties>\n            <Properties>NumberSent</Properties>\n            <Properties>NumberDelivered</Properties>\n            <Properties>NumberErrored</Properties>\n            <Properties>NumberExcluded</Properties>\n            <Properties>HardBounces</Properties>\n            <Properties>SoftBounces</Properties>\n            <Properties>OtherBounces</Properties>\n            <Filter xsi:type="SimpleFilterPart">\n               <Property>ID</Property>\n               <SimpleOperator>equals</SimpleOperator>\n               <Value>364147</Value>\n            </Filter>\n         </RetrieveRequest>\n      </RetrieveRequestMsg>\n   </s:Body>\n</s:Envelope>';

    controller.createSendRetrieveTrackingUP(contentType, body, function(error, response, context) {

    
    });
```



### <a name="create_opens_retrieve_up"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCSOAPTrackingEmailController.createOpensRetrieveUP") createOpensRetrieveUP

> Retrieve Opens for a Send


```javascript
function createOpensRetrieveUP(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'text/xml';
    var body = '<?xml version="1.0" encoding="UTF-8"?>\n<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">\n   <s:Header>\n      <a:Action s:mustUnderstand="1">Retrieve</a:Action>\n      <a:MessageID>urn:uuid:7e0cca04-57bd-4481-864c-6ea8039d2ea0</a:MessageID>\n      <a:ReplyTo>\n         <a:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</a:Address>\n      </a:ReplyTo>\n      <a:To s:mustUnderstand="1">{{soapEndPoint}}</a:To>\n      <o:Security xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" s:mustUnderstand="1">\n         <o:UsernameToken>\n            <o:Username>{{soapUsername}}</o:Username>\n            <o:Password><![CDATA[{{soapPassword}}]]></o:Password>\n         </o:UsernameToken>\n      </o:Security>\n   </s:Header>\n   <s:Body xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">\n      <RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">\n         <RetrieveRequest>\n            <!--\n             <ClientIDs>\n                <ID>1340293</ID>\n             </ClientIDs>\n             <QueryAllAccounts>true</QueryAllAccounts>\n            -->\n            <ObjectType>OpenEvent</ObjectType>\n            <Properties>SendID</Properties>\n            <Properties>EventDate</Properties>\n            <Properties>SubscriberKey</Properties>\n            <Filter xsi:type="par:ComplexFilterPart" xmlns:par="http://exacttarget.com/wsdl/partnerAPI">\n\t\t\t<LeftOperand xsi:type="par:SimpleFilterPart">\n               <Property>EventDate</Property>\n               <SimpleOperator>greaterThan</SimpleOperator>\n               <DateValue>2016-06-12T00:00:00</DateValue>\n            </LeftOperand>\n            <LogicalOperator>AND</LogicalOperator>\n            <RightOperand xsi:type="SimpleFilterPart">\n               <Property>SendID</Property>\n               <SimpleOperator>equals</SimpleOperator>\n               <Value>364147</Value>\n            </RightOperand>\n            </Filter>\n         </RetrieveRequest>\n      </RetrieveRequestMsg>\n   </s:Body>\n</s:Envelope>';

    controller.createOpensRetrieveUP(contentType, body, function(error, response, context) {

    
    });
```



### <a name="create_sent_retrieve_up"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCSOAPTrackingEmailController.createSentRetrieveUP") createSentRetrieveUP

> TODO: Add Description


```javascript
function createSentRetrieveUP(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'text/xml';
    var body = '<?xml version="1.0" encoding="UTF-8"?>\n<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">\n   <s:Header>\n      <a:Action s:mustUnderstand="1">Retrieve</a:Action>\n      <a:MessageID>urn:uuid:7e0cca04-57bd-4481-864c-6ea8039d2ea0</a:MessageID>\n      <a:ReplyTo>\n         <a:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</a:Address>\n      </a:ReplyTo>\n      <a:To s:mustUnderstand="1">{{soapEndPoint}}</a:To>\n      <o:Security xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" s:mustUnderstand="1">\n         <o:UsernameToken>\n            <o:Username>{{soapUsername}}</o:Username>\n            <o:Password><![CDATA[{{soapPassword}}]]></o:Password>\n         </o:UsernameToken>\n      </o:Security>\n   </s:Header>\n   <s:Body>\n      <RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">\n         <RetrieveRequest>\n            <ObjectType>SentEvent</ObjectType>\n            <Properties>Client.ID</Properties>\n            <Properties>TriggeredSendDefinitionObjectID</Properties>\n            <Properties>SendID</Properties>\n            <Properties>SubscriberKey</Properties>\n            <Properties>EventDate</Properties>\n            <Properties>EventType</Properties>\n            <Properties>BatchID</Properties>\n            <Properties>ListID</Properties>\n            <!-- If you want to limit the results returned by date\n            <Filter xsi:type="ns1:SimpleFilterPart" xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI">\n               <Property>EventDate</Property>\n               <SimpleOperator>between</SimpleOperator>\n               <DateValue>2009-06-30T03:00:00.000Z</DateValue>\n               <DateValue>2017-03-02T02:59:59.999Z</DateValue>\n            </Filter>\n            -->\n         </RetrieveRequest>\n      </RetrieveRequestMsg>\n   </s:Body>\n</s:Envelope>';

    controller.createSentRetrieveUP(contentType, body, function(error, response, context) {

    
    });
```



### <a name="create_link_send_retrieve_up"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCSOAPTrackingEmailController.createLinkSendRetrieveUP") createLinkSendRetrieveUP

> TODO: Add Description


```javascript
function createLinkSendRetrieveUP(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'text/xml';
    var body = '<?xml version="1.0" encoding="UTF-8"?>\n<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">\n   <s:Header>\n      <a:Action s:mustUnderstand="1">Retrieve</a:Action>\n      <a:MessageID>urn:uuid:7e0cca04-57bd-4481-864c-6ea8039d2ea0</a:MessageID>\n      <a:ReplyTo>\n         <a:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</a:Address>\n      </a:ReplyTo>\n      <a:To s:mustUnderstand="1">{{soapEndPoint}}</a:To>\n      <o:Security xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" s:mustUnderstand="1">\n         <o:UsernameToken>\n            <o:Username>{{soapUsername}}</o:Username>\n            <o:Password><![CDATA[{{soapPassword}}]]></o:Password>\n         </o:UsernameToken>\n      </o:Security>\n   </s:Header>\n   <s:Body>\n      <RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">\n         <RetrieveRequest>\n            <ObjectType>LinkSend</ObjectType>\n            <Properties>SendID</Properties>\n\t\t\t<Properties>Link.ID</Properties>\n\t\t\t<Properties>Link.TotalClicks</Properties>\n\t\t\t<Properties>Link.UniqueClicks</Properties>\n\t\t\t<Properties>Link.URL</Properties>\n\t\t\t<Properties>Link.Alias</Properties>\n         </RetrieveRequest>\n      </RetrieveRequestMsg>\n   </s:Body>\n</s:Envelope>';

    controller.createLinkSendRetrieveUP(contentType, body, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="sfmcsoap_lists_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SFMCSOAPListsController") SFMCSOAPListsController

### Get singleton instance

The singleton instance of the ``` SFMCSOAPListsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SFMCSOAPListsController;
```

### <a name="create_list_retrieve_for_subscriber_up"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCSOAPListsController.createListRetrieveForSubscriberUP") createListRetrieveForSubscriberUP

> TODO: Add Description


```javascript
function createListRetrieveForSubscriberUP(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'text/xml';
    var body = '<?xml version="1.0" encoding="UTF-8"?>\n<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">\n   <s:Header>\n      <a:Action s:mustUnderstand="1">Retrieve</a:Action>\n      <a:MessageID>urn:uuid:7e0cca04-57bd-4481-864c-6ea8039d2ea0</a:MessageID>\n      <a:ReplyTo>\n         <a:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</a:Address>\n      </a:ReplyTo>\n      <a:To s:mustUnderstand="1">{{soapEndPoint}}</a:To>\n      <o:Security xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" s:mustUnderstand="1">\n         <o:UsernameToken>\n            <o:Username>{{soapUsername}}</o:Username>\n            <o:Password><![CDATA[{{soapPassword}}]]></o:Password>\n         </o:UsernameToken>\n      </o:Security>\n   </s:Header>\n   <s:Body xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">\n      <RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">\n         <RetrieveRequest>\n            <ObjectType>SubscriberList</ObjectType>\n            <Properties>SubscriberKey</Properties>\n            <Properties>Status</Properties>\n            <Properties>List.ListName</Properties>\n            <Properties>List.ID</Properties>\n            <Properties>SubscriberKey</Properties>\n            <Filter xmlns:q1="http://exacttarget.com/wsdl/partnerAPI" xsi:type="q1:SimpleFilterPart">\n               <q1:Property>SubscriberKey</q1:Property>\n               <q1:SimpleOperator>equals</q1:SimpleOperator>\n               <q1:Value>help@example.com</q1:Value>\n            </Filter>\n         </RetrieveRequest>\n      </RetrieveRequestMsg>\n   </s:Body>\n</s:Envelope>';

    controller.createListRetrieveForSubscriberUP(contentType, body, function(error, response, context) {

    
    });
```



### <a name="create_list_retrieve_for_subscriber_token"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCSOAPListsController.createListRetrieveForSubscriberToken") createListRetrieveForSubscriberToken

> TODO: Add Description


```javascript
function createListRetrieveForSubscriberToken(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'text/xml';
    var body = '<?xml version="1.0" encoding="UTF-8"?>\n<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">\n   <s:Header>\n      <a:Action s:mustUnderstand="1">Retrieve</a:Action>\n      <a:MessageID>urn:uuid:7e0cca04-57bd-4481-864c-6ea8039d2ea0</a:MessageID>\n      <a:ReplyTo>\n         <a:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</a:Address>\n      </a:ReplyTo>\n      <a:To s:mustUnderstand="1">{{soapEndPoint}}</a:To>\n      <fueloauth xmlns="http://exacttarget.com">{{accessToken}}</fueloauth>\n   </s:Header>\n   <s:Body xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">\n      <RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">\n         <RetrieveRequest>\n            <ObjectType>SubscriberList</ObjectType>\n            <Properties>SubscriberKey</Properties>\n            <Properties>Status</Properties>\n            <Properties>List.ListName</Properties>\n            <Properties>List.ID</Properties>\n            <Properties>SubscriberKey</Properties>\n            <Filter xmlns:q1="http://exacttarget.com/wsdl/partnerAPI" xsi:type="q1:SimpleFilterPart">\n               <q1:Property>SubscriberKey</q1:Property>\n               <q1:SimpleOperator>equals</q1:SimpleOperator>\n               <q1:Value>help@example.com</q1:Value>\n            </Filter>\n         </RetrieveRequest>\n      </RetrieveRequestMsg>\n   </s:Body>\n</s:Envelope>';

    controller.createListRetrieveForSubscriberToken(contentType, body, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="sfmcsoap_email_send_definition_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SFMCSOAPEmailSendDefinitionController") SFMCSOAPEmailSendDefinitionController

### Get singleton instance

The singleton instance of the ``` SFMCSOAPEmailSendDefinitionController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SFMCSOAPEmailSendDefinitionController;
```

### <a name="create_email_send_defintion_create_up"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCSOAPEmailSendDefinitionController.createEmailSendDefintionCreateUP") createEmailSendDefintionCreateUP

> TODO: Add Description


```javascript
function createEmailSendDefintionCreateUP(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'text/xml';
    var body = '<?xml version="1.0" encoding="UTF-8"?>\n<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">\n   <s:Header>\n      <a:Action s:mustUnderstand="1">Create</a:Action>\n      <a:MessageID>urn:uuid:7e0cca04-57bd-4481-864c-6ea8039d2ea0</a:MessageID>\n      <a:ReplyTo>\n         <a:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</a:Address>\n      </a:ReplyTo>\n      <a:To s:mustUnderstand="1">{{soapEndPoint}}</a:To>\n      <o:Security xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" s:mustUnderstand="1">\n         <o:UsernameToken>\n            <o:Username>{{soapUsername}}</o:Username>\n            <o:Password><![CDATA[{{soapPassword}}]]></o:Password>\n         </o:UsernameToken>\n      </o:Security>\n   </s:Header>\n\t<s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">\n\t\t<CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">\n\t\t<!--\n            <Options>\n             <SendResponseTo>\n      \t\t<ResponseType>email</ResponseType>\n      \t\t<ResponseAddress>your_address@salesforce.com</ResponseAddress>\n      \t\t<RespondWhen>OnCallComplete</RespondWhen>\n      \t\t<IncludeResults>true</IncludeResults>\n      \t\t<IncludeObjects>true</IncludeObjects>\n  \t\t   </SendResponseTo>\n          \t<RequestType>Asynchronous</RequestType>\n      \t</Options>\n      \t-->\n\t\t    <Objects xsi:type="EmailSendDefinition">\n                <!--\n                <Client>\n                    <ID>1411692</ID>\n                </Client>\n                -->\n\t\t        <CustomerKey>esd_cust_key</CustomerKey>\n                <Name>ESD Name</Name>\n                <Description>ESD Description</Description>\n                <!-- <CategoryID>258891</CategoryID> -->\n                <SendClassification>\n                    <CustomerKey>Default Commercial</CustomerKey>\n                </SendClassification>\n                <!--\n                <SenderProfile>\n                    <CustomerKey>default</CustomerKey>\n                </SenderProfile>\n                -->\n                <SendDefinitionList>\n                    <CustomObjectID>656c73c2-d431-e611-bb19-9c8e99202da4</CustomObjectID>\n                    <DataSourceTypeID>CustomObject</DataSourceTypeID>\n                </SendDefinitionList>\n                <Email>\n                    <ID>45443</ID>\n                </Email>\n            </Objects>\n        </CreateRequest>\n    </s:Body>\n</s:Envelope>';

    controller.createEmailSendDefintionCreateUP(contentType, body, function(error, response, context) {

    
    });
```



### <a name="create_email_send_defintion_perform_up"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCSOAPEmailSendDefinitionController.createEmailSendDefintionPerformUP") createEmailSendDefintionPerformUP

> Perform a user initiated send definition.


```javascript
function createEmailSendDefintionPerformUP(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'text/xml';
    var body = '<?xml version="1.0" encoding="UTF-8"?>\n<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">\n   <s:Header>\n      <a:Action s:mustUnderstand="1">Perform</a:Action>\n      <a:MessageID>urn:uuid:7e0cca04-57bd-4481-864c-6ea8039d2ea0</a:MessageID>\n      <a:ReplyTo>\n         <a:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</a:Address>\n      </a:ReplyTo>\n      <a:To s:mustUnderstand="1">{{soapEndPoint}}</a:To>\n      <o:Security xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" s:mustUnderstand="1">\n         <o:UsernameToken>\n            <o:Username>{{soapUsername}}</o:Username>\n            <o:Password><![CDATA[{{soapPassword}}]]></o:Password>\n         </o:UsernameToken>\n      </o:Security>\n   </s:Header>\n   <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">\n      <PerformRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">\n         <Action>start</Action>\n         <Definitions>\n            <Definition xsi:type="EmailSendDefinition">\n               <CustomerKey>esd_cust_key</CustomerKey>\n               <SenderProfile>\n                  <FromName>Makana Health</FromName>\n                  <FromAddress>support@makana.com</FromAddress>\n               </SenderProfile>\n            </Definition>\n         </Definitions>\n      </PerformRequestMsg>\n   </s:Body>\n</s:Envelope>';

    controller.createEmailSendDefintionPerformUP(contentType, body, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="sfmcsoap_email_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SFMCSOAPEmailController") SFMCSOAPEmailController

### Get singleton instance

The singleton instance of the ``` SFMCSOAPEmailController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SFMCSOAPEmailController;
```

### <a name="create_email_create_up"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCSOAPEmailController.createEmailCreateUP") createEmailCreateUP

> TODO: Add Description


```javascript
function createEmailCreateUP(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'text/xml';
    var body = '<?xml version="1.0" encoding="UTF-8"?>\n<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">\n   <s:Header>\n      <a:Action s:mustUnderstand="1">Create</a:Action>\n      <a:MessageID>urn:uuid:7e0cca04-57bd-4481-864c-6ea8039d2ea0</a:MessageID>\n      <a:ReplyTo>\n         <a:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</a:Address>\n      </a:ReplyTo>\n      <a:To s:mustUnderstand="1">{{soapEndPoint}}</a:To>\n      <o:Security xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" s:mustUnderstand="1">\n         <o:UsernameToken>\n            <o:Username>{{soapUsername}}</o:Username>\n            <o:Password><![CDATA[{{soapPassword}}]]></o:Password>\n         </o:UsernameToken>\n      </o:Security>\n   </s:Header>\n\t<s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">\n\t\t<CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">\n\t\t<!--\n            <Options>\n             <SendResponseTo>\n      \t\t<ResponseType>email</ResponseType>\n      \t\t<ResponseAddress>your_address@salesforce.com</ResponseAddress>\n      \t\t<RespondWhen>OnCallComplete</RespondWhen>\n      \t\t<IncludeResults>true</IncludeResults>\n      \t\t<IncludeObjects>true</IncludeObjects>\n  \t\t   </SendResponseTo>\n          \t<RequestType>Asynchronous</RequestType>\n      \t</Options>\n      \t-->\n\t\t    <Objects xsi:type="Email">\n                <!--\n                <Client>\n                    <ID>1411692</ID>\n                </Client>\n                -->\n                <Name>Email Name</Name>\n                <Description>Email Description</Description>\n                <Subject>Hey %%First Name%%, we have an offer for you!</Subject>\n                <EmailType>HTML</EmailType>\n                <IsHTMLPaste>true</IsHTMLPaste>\n                <HTMLBody>\n                  <![CDATA[<html>\n<body>\n<table cellpadding="2" cellspacing="0" width="600" ID="Table1" Border=0><tr><td style=\'background-color:#6c5e91;\'><img align="left" width=\'600\' src=\'http://image.s4.exct.net/lib/fe9715747465027477/m/1/branding-MakanaHealth-logo-header-gray-2x.png\'></td></tr></table>\n<table cellpadding="2" cellspacing="0" width="604" ID="Table3" Border=0><tr><td><br/>Hi %%First Name%%, thanks for signing up for emails! We look forward to communicating with you!<br/><br/></td></tr></table>\n<table cellpadding="2" cellspacing="0" width="604" ID="Table3" Border=0><tr><td style=\'background-color:#6c5e91;\'>&nbsp;</td></tr></table>\n<table cellpadding="2" cellspacing="0" width="600" ID="Table4" Border=0><tr><td><font face="verdana" size="1" color="#444444">This email was sent by: <b>%%Member_Busname%%</b><br>%%Member_Addr%% %%Member_City%%, %%Member_State%%, %%Member_PostalCode%%, %%Member_Country%%<br><br></font></td></tr></table><a href="%%profile_center_url%%" alias="Update Profile">Update Profile</a>\n<custom name="opencounter" type="tracking">\n</body>\n</html>\n]]>  \n                </HTMLBody>\n            </Objects>\n        </CreateRequest>\n    </s:Body>\n</s:Envelope>';

    controller.createEmailCreateUP(contentType, body, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="sfmcsoap_data_extensions_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SFMCSOAPDataExtensionsController") SFMCSOAPDataExtensionsController

### Get singleton instance

The singleton instance of the ``` SFMCSOAPDataExtensionsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SFMCSOAPDataExtensionsController;
```

### <a name="create_data_extension_rows_upsert_up"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCSOAPDataExtensionsController.createDataExtensionRowsUpsertUP") createDataExtensionRowsUpsertUP

> TODO: Add Description


```javascript
function createDataExtensionRowsUpsertUP(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'text/xml';
    var body = '<?xml version="1.0" encoding="UTF-8"?>\n<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">\n   <s:Header>\n      <a:Action s:mustUnderstand="1">Create</a:Action>\n      <a:MessageID>urn:uuid:7e0cca04-57bd-4481-864c-6ea8039d2ea0</a:MessageID>\n      <a:ReplyTo>\n         <a:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</a:Address>\n      </a:ReplyTo>\n      <a:To s:mustUnderstand="1">{{soapEndPoint}}</a:To>\n      <o:Security xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" s:mustUnderstand="1">\n         <o:UsernameToken>\n            <o:Username>{{soapUsername}}</o:Username>\n            <o:Password><![CDATA[{{soapPassword}}]]></o:Password>\n         </o:UsernameToken>\n      </o:Security>\n   </s:Header>\n\t<s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">\n\t\t<UpdateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">\n        <!--\n            <Options>\n             <SendResponseTo>\n      \t\t<ResponseType>email</ResponseType>\n      \t\t<ResponseAddress>your_address@salesforce.com</ResponseAddress>\n      \t\t<RespondWhen>OnCallComplete</RespondWhen>\n      \t\t<IncludeResults>true</IncludeResults>\n      \t\t<IncludeObjects>true</IncludeObjects>\n  \t\t   </SendResponseTo>\n             <RequestType>Asynchronous</RequestType>\n      \t    </Options>\n      \t-->\n      \t<Options>\n            <SaveOptions>\n               <SaveOption>\n                  <PropertyName>DataExtensionObject</PropertyName>\n                  <SaveAction>UpdateAdd</SaveAction>\n               </SaveOption>\n            </SaveOptions>\n         </Options>\n      \t    <Objects xsi:type="DataExtensionObject">\n                <CustomerKey>de_custkey</CustomerKey>\n                <Keys>\n                    <Key>\n                        <Name>Subscriber Key</Name>\n                        <Value>0035677WUEIW323KLA</Value>\n                    </Key>\n                    <Key>\n                        <Name>Email Address</Name>\n                        <Value>jonas@gmail.com</Value>\n                    </Key>\n                </Keys>\n                <Properties>\n                    <Property>\n                        <Name>First Name</Name>\n                        <Value>Jonas</Value>\n                    </Property>\n                    <Property>\n                        <Name>Signup Date</Name>\n                        <Value>2015-11-21T10:00:00-04:00</Value>\n                    </Property>\n                </Properties>\n            </Objects>\n            <Objects xsi:type="DataExtensionObject">\n                <CustomerKey>de_custkey</CustomerKey>\n                <Keys>\n                    <Key>\n                        <Name>Subscriber Key</Name>\n                        <Value>0035677FHGFH323GHR</Value>\n                    </Key>\n                    <Key>\n                        <Name>Email Address</Name>\n                        <Value>wepeel@gmail.com</Value>\n                    </Key>\n                </Keys>\n                <Properties>\n                    <Property>\n                        <Name>First Name</Name>\n                        <Value>Wepeel</Value>\n                    </Property>\n                    <Property>\n                        <Name>Signup Date</Name>\n                        <Value>2015-12-24T12:22:33-07:00</Value>\n                    </Property>\n                </Properties>\n            </Objects>\n\t\t</UpdateRequest>\n\t</s:Body>\n</s:Envelope>';

    controller.createDataExtensionRowsUpsertUP(contentType, body, function(error, response, context) {

    
    });
```



### <a name="create_data_extension_create_up"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCSOAPDataExtensionsController.createDataExtensionCreateUP") createDataExtensionCreateUP

> TODO: Add Description


```javascript
function createDataExtensionCreateUP(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'text/xml';
    var body = '<?xml version="1.0" encoding="UTF-8"?>\n<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">\n   <s:Header>\n      <a:Action s:mustUnderstand="1">Create</a:Action>\n      <a:MessageID>urn:uuid:7e0cca04-57bd-4481-864c-6ea8039d2ea0</a:MessageID>\n      <a:ReplyTo>\n         <a:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</a:Address>\n      </a:ReplyTo>\n      <a:To s:mustUnderstand="1">{{soapEndPoint}}</a:To>\n      <o:Security xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" s:mustUnderstand="1">\n         <o:UsernameToken>\n            <o:Username>{{soapUsername}}</o:Username>\n            <o:Password><![CDATA[{{soapPassword}}]]></o:Password>\n         </o:UsernameToken>\n      </o:Security>\n   </s:Header>\n\t<s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">\n\t\t<CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">\n        <!--\n            <Options>\n             <SendResponseTo>\n      \t\t<ResponseType>email</ResponseType>\n      \t\t<ResponseAddress>your_address@salesforce.com</ResponseAddress>\n      \t\t<RespondWhen>OnCallComplete</RespondWhen>\n      \t\t<IncludeResults>true</IncludeResults>\n      \t\t<IncludeObjects>true</IncludeObjects>\n  \t\t   </SendResponseTo>\n             <RequestType>Asynchronous</RequestType>\n      \t    </Options>\n      \t-->\n         <Objects xsi:type="DataExtension">\n            <!--\n            <Client>\n                <ID>10798224</ID>\n            </Client>\n            -->\n            <CustomerKey>de_custkey</CustomerKey>\n            <Name>Data Extension Name</Name>\n            <!-- Specify folder DE created in\n            <CategoryID>432655</CategoryID>\n            -->\n            <IsSendable>true</IsSendable>\n            <SendableDataExtensionField>\n                <CustomerKey>SubscriberKey</CustomerKey>\n                <Name>Subscriber Key</Name>\n                <FieldType>Text</FieldType>\n            </SendableDataExtensionField>\n            <SendableSubscriberField>\n                <Name>Subscriber Key</Name>\n                <Value/>\n            </SendableSubscriberField>\n            <Fields>\n                <Field>\n                    <CustomerKey>SubscriberKey</CustomerKey>\n                    <Name>Subscriber Key</Name>\n                    <FieldType>Text</FieldType>\n                    <MaxLength>50</MaxLength>\n                    <IsRequired>true</IsRequired>\n                    <IsPrimaryKey>true</IsPrimaryKey>\n                </Field>\n                <Field>\n                    <CustomerKey>EmailAddress</CustomerKey>\n                    <Name>Email Address</Name>\n                    <FieldType>EmailAddress</FieldType>\n                    <IsRequired>true</IsRequired>\n                    <IsPrimaryKey>true</IsPrimaryKey>\n                </Field>\n                <Field>\n                    <CustomerKey>FirstName</CustomerKey>\n                    <Name>First Name</Name>\n                    <FieldType>Text</FieldType>\n                    <IsNillable>true</IsNillable>\n                    <IsPrimaryKey>false</IsPrimaryKey>\n                </Field>\n                <Field>\n                    <CustomerKey>SignupDate</CustomerKey>\n                    <Name>Signup Date</Name>\n                    <DataType>Date</DataType>\n                    <IsNillable>true</IsNillable>\n                    <IsPrimaryKey>false</IsPrimaryKey>\n                    <FieldType>Date</FieldType>\n                </Field> \n            </Fields>\n         </Objects>\n\t\t</CreateRequest>\n\t</s:Body>\n</s:Envelope>';

    controller.createDataExtensionCreateUP(contentType, body, function(error, response, context) {

    
    });
```



### <a name="create_data_extension_rows_retrieve_up"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCSOAPDataExtensionsController.createDataExtensionRowsRetrieveUP") createDataExtensionRowsRetrieveUP

> Retrieves contents of a data extension.


```javascript
function createDataExtensionRowsRetrieveUP(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'text/xml';
    var body = '<?xml version="1.0" encoding="UTF-8"?>\n<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">\n   <s:Header>\n      <a:Action s:mustUnderstand="1">Retrieve</a:Action>\n      <a:MessageID>urn:uuid:7e0cca04-57bd-4481-864c-6ea8039d2ea0</a:MessageID>\n      <a:ReplyTo>\n         <a:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</a:Address>\n      </a:ReplyTo>\n      <a:To s:mustUnderstand="1">{{soapEndPoint}}</a:To>\n      <o:Security xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" s:mustUnderstand="1">\n         <o:UsernameToken>\n            <o:Username>{{soapUsername}}</o:Username>\n            <o:Password><![CDATA[{{soapPassword}}]]></o:Password>\n         </o:UsernameToken>\n      </o:Security>\n   </s:Header>\n\t<s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">\n\t    <RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">\n         <RetrieveRequest>\n            <ObjectType>DataExtensionObject[Data Extension Name]</ObjectType>\n            <Properties>Subscriber Key</Properties>\n            <Properties>Email Address</Properties>\n            <Properties>First Name</Properties>\n            <Properties>Signup Date</Properties>\n            <Filter xmlns:q1="http://exacttarget.com/wsdl/partnerAPI" xsi:type="q1:SimpleFilterPart">\n               <q1:Property>First Name</q1:Property>\n               <q1:SimpleOperator>equals</q1:SimpleOperator>\n               <q1:Value>Wepeel</q1:Value>\n            </Filter>\n         </RetrieveRequest>\n      </RetrieveRequestMsg>\n\t</s:Body>\n</s:Envelope>';

    controller.createDataExtensionRowsRetrieveUP(contentType, body, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="sfmc_location_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SFMCLocationController") SFMCLocationController

### Get singleton instance

The singleton instance of the ``` SFMCLocationController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SFMCLocationController;
```

### <a name="delete_location"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCLocationController.deleteLocation") deleteLocation

> TODO: Add Description


```javascript
function deleteLocation(contentType, locationID, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| locationID |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'Content-Type';
    var locationID = 'locationID';

    controller.deleteLocation(contentType, locationID, function(error, response, context) {

    
    });
```



### <a name="retrieve_all_locations"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCLocationController.retrieveAllLocations") retrieveAllLocations

> TODO: Add Description


```javascript
function retrieveAllLocations(contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';

    controller.retrieveAllLocations(contentType, function(error, response, context) {

    
    });
```



### <a name="create_location"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCLocationController.createLocation") createLocation

> Enable create location


```javascript
function createLocation(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';
    var body = new CreateLocationRequest({"name":"PINTS Brewing","location":"412 NW 5th Ave Portland, OR 97209","description":"PINTS Brewing","center":{"latitude":45.526176,"longitude":-122.675498},"radius":50,"attributes":[{"attribute":"Address 1","value":"412 NW 5th Ave"},{"attribute":"City","value":"Portland"},{"attribute":"State","value":"OR"},{"attribute":"Zip","value":"97209"}]});

    controller.createLocation(contentType, body, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="sfmc_events_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SFMCEventsController") SFMCEventsController

### Get singleton instance

The singleton instance of the ``` SFMCEventsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SFMCEventsController;
```

### <a name="create_fire_event"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCEventsController.createFireEvent") createFireEvent

> TODO: Add Description


```javascript
function createFireEvent(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';
    var body = '{\n"ContactKey":"[contactKey]",\n"EventDefinitionKey":"[EventDefinitionKey]",\n"Data": {\n\t[Data]  \n}\n}';

    controller.createFireEvent(contentType, body, function(error, response, context) {

    
    });
```



### <a name="get_events_request"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCEventsController.getEventsRequest") getEventsRequest

> TODO: Add Description


```javascript
function getEventsRequest(contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';

    controller.getEventsRequest(contentType, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="sfmc_interactions_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SFMCInteractionsController") SFMCInteractionsController

### Get singleton instance

The singleton instance of the ``` SFMCInteractionsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SFMCInteractionsController;
```

### <a name="get_interactions"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCInteractionsController.getInteractions") getInteractions

> Get all of the Journey Builder applications.


```javascript
function getInteractions(contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';

    controller.getInteractions(contentType, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="sfmcsoap_automation_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SFMCSOAPAutomationController") SFMCSOAPAutomationController

### Get singleton instance

The singleton instance of the ``` SFMCSOAPAutomationController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SFMCSOAPAutomationController;
```

### <a name="create_automation_retrieve_status"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCSOAPAutomationController.createAutomationRetrieveStatus") createAutomationRetrieveStatus

> TODO: Add Description


```javascript
function createAutomationRetrieveStatus(contentType, sOAPAction, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| sOAPAction |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'text/xml';
    var sOAPAction = 'Retrieve';
    var body = '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">\n   <s:Header>\n   \t      <o:Security xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" s:mustUnderstand="1">\n         <o:UsernameToken u:Id="uuid-4e7d733b-f16d-44e1-b947-b27ce4cda3fe-1">\n            <o:Username>{{soapUsername}}</o:Username>\n            <o:Password><![CDATA[{{soapPassword}}]]></o:Password>\n         </o:UsernameToken>\n      </o:Security>\n   </s:Header>\n   <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">\n      <RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">\n         <RetrieveRequest>\n            <ObjectType>Automation</ObjectType>\n            <Properties>ProgramID</Properties>\n            <Properties>Name</Properties>\n            <Properties>Description</Properties>\n            <Properties>RecurrenceID</Properties>\n            <Properties>CustomerKey</Properties>\n            <Properties>IsActive</Properties>\n            <Properties>CreatedDate</Properties>\n            <Properties>ModifiedDate</Properties>\n            <Properties>Status</Properties>\n            <Filter xsi:type="SimpleFilterPart">\n               <Property>CustomerKey</Property>\n               <SimpleOperator>equals</SimpleOperator>\n               <Value>{{automationExtCustKey}}</Value>\n            </Filter>\n         </RetrieveRequest>\n      </RetrieveRequestMsg>\n   </s:Body>\n</s:Envelope>';

    controller.createAutomationRetrieveStatus(contentType, sOAPAction, body, function(error, response, context) {

    
    });
```



### <a name="create_automation_start"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCSOAPAutomationController.createAutomationStart") createAutomationStart

> TODO: Add Description


```javascript
function createAutomationStart(contentType, sOAPAction, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| sOAPAction |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'text/xml';
    var sOAPAction = 'Perform';
    var body = '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">\n   <s:Header>\n      <o:Security xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" s:mustUnderstand="1">\n         <o:UsernameToken>\n            <o:Username>{{soapUsername}}</o:Username>\n            <o:Password><![CDATA[{{soapPassword}}]]></o:Password>\n         </o:UsernameToken>\n      </o:Security>\n   </s:Header>\n   <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">\n        <PerformRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">\n            <Action>start</Action>\n            <Definitions>\n                <Definition xsi:type="Automation">\n                    <ObjectID>{{automationObjectID}}</ObjectID>\n                </Definition>\n            </Definitions>\n        </PerformRequestMsg>\n   </s:Body>\n</s:Envelope>';

    controller.createAutomationStart(contentType, sOAPAction, body, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="sfmcsoap_administration_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SFMCSOAPAdministrationController") SFMCSOAPAdministrationController

### Get singleton instance

The singleton instance of the ``` SFMCSOAPAdministrationController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SFMCSOAPAdministrationController;
```

### <a name="create_return_all_mc_account_objects"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCSOAPAdministrationController.createReturnAllMCAccountObjects") createReturnAllMCAccountObjects

> TODO: Add Description


```javascript
function createReturnAllMCAccountObjects(contentType, sOAPAction, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| sOAPAction |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'text/xml';
    var sOAPAction = 'Retrieve';
    var body = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">\n   <soapenv:Header>\n      <wsse:Security soapenv:mustUnderstand="1" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">\n         <wsse:UsernameToken wsu:Id="UsernameToken-24440876" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">\n            <wsse:Username>{{soapUsername}}</wsse:Username>\n            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText"><![CDATA[{{soapPassword}}]]></wsse:Password>\n         </wsse:UsernameToken>\n      </wsse:Security>\n   </soapenv:Header>\n   <soapenv:Body>\n <RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">\n  <RetrieveRequest>\n     <ObjectType>AccountUser</ObjectType>\n     <QueryAllAccounts>true</QueryAllAccounts> // to enable child accounts\n     <Properties>email</Properties>\n     <Properties>ActiveFlag</Properties>\n     <Properties>CreatedDate</Properties>\n     <Properties>isAPIUser</Properties>\n     <Properties>UserID</Properties>\n     <Properties>LastSuccessfulLogin</Properties>\n     <AssociatedBusinessUnits>\n     <BusinessUnit>\n     <Properties>Name</Properties>\n     </BusinessUnit>\n     </AssociatedBusinessUnits>\n     <!-- add this filter in to retrieve a specific user\n\t <Filter xsi:type="ns1:SimpleFilterPart" xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI">\n               <Property>CustomerKey</Property>\n               <SimpleOperator>equals</SimpleOperator>\n               <Value>{{userExternalKey}}</Value>\n\t </Filter> \n\t -->\n  </RetrieveRequest>\n  </RetrieveRequestMsg>\n   </soapenv:Body>\n</soapenv:Envelope>';

    controller.createReturnAllMCAccountObjects(contentType, sOAPAction, body, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="sfmcrestapi_queries_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SFMCRESTAPIQueriesController") SFMCRESTAPIQueriesController

### Get singleton instance

The singleton instance of the ``` SFMCRESTAPIQueriesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SFMCRESTAPIQueriesController;
```

### <a name="get_rest_contact_query"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCRESTAPIQueriesController.getRESTContactQuery") getRESTContactQuery

> TODO: Add Description


```javascript
function getRESTContactQuery(contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';

    controller.getRESTContactQuery(contentType, function(error, response, context) {

    
    });
```



### <a name="get_rest_hub_query"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCRESTAPIQueriesController.getRESTHubQuery") getRESTHubQuery

> TODO: Add Description


```javascript
function getRESTHubQuery(contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';

    controller.getRESTHubQuery(contentType, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="social_studio_authors_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SocialStudioAuthorsController") SocialStudioAuthorsController

### Get singleton instance

The singleton instance of the ``` SocialStudioAuthorsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SocialStudioAuthorsController;
```

### <a name="list_author_details"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioAuthorsController.listAuthorDetails") listAuthorDetails

> TODO: Add Description


```javascript
function listAuthorDetails(accessToken, authorId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| authorId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = access_token;
    var authorId = 'authorId';

    controller.listAuthorDetails(accessToken, authorId, function(error, response, context) {

    
    });
```



### <a name="create_apply_author_tag"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioAuthorsController.createApplyAuthorTag") createApplyAuthorTag

> TODO: Add Description


```javascript
function createApplyAuthorTag(accessToken, contentType, body, authorId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |
| authorId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = access_token;
    var contentType = 'Content-Type';
    var body = new ApplyAuthorTagRequest({"key":"value"});
    var authorId = 'authorId';

    controller.createApplyAuthorTag(accessToken, contentType, body, authorId, function(error, response, context) {

    
    });
```



### <a name="delete_a_tag_from_an_author"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioAuthorsController.deleteATagFromAnAuthor") deleteATagFromAnAuthor

> TODO: Add Description


```javascript
function deleteATagFromAnAuthor(ids, accessToken, contentType, body, authorId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| ids |  ``` Required ```  | TODO: Add a parameter description |
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |
| authorId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var ids = 'ids';
    var accessToken = access_token;
    var contentType = 'Content-Type';
    var body = new DeleteATagFromAnAuthorRequest({"key":"value"});
    var authorId = 'authorId';

    controller.deleteATagFromAnAuthor(ids, accessToken, contentType, body, authorId, function(error, response, context) {

    
    });
```



### <a name="delete_tags_from_authors"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioAuthorsController.deleteTagsFromAuthors") deleteTagsFromAuthors

> TODO: Add Description


```javascript
function deleteTagsFromAuthors(ids, accessToken, contentType, authorId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| ids |  ``` Required ```  | TODO: Add a parameter description |
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| authorId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var ids = 'ids';
    var accessToken = access_token;
    var contentType = 'Content-Type';
    var authorId = 'authorId';

    controller.deleteTagsFromAuthors(ids, accessToken, contentType, authorId, function(error, response, context) {

    
    });
```



### <a name="create_apply_author_comment"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioAuthorsController.createApplyAuthorComment") createApplyAuthorComment

> TODO: Add Description


```javascript
function createApplyAuthorComment(accessToken, contentType, body, authorId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |
| authorId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = access_token;
    var contentType = 'Content-Type';
    var body = new ApplyAuthorCommentRequest({"key":"value"});
    var authorId = 'authorId';

    controller.createApplyAuthorComment(accessToken, contentType, body, authorId, function(error, response, context) {

    
    });
```



### <a name="list_of_notes_for_an_author"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioAuthorsController.listOfNotesForAnAuthor") listOfNotesForAnAuthor

> TODO: Add Description


```javascript
function listOfNotesForAnAuthor(accessToken, authorId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| authorId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = access_token;
    var authorId = 'authorId';

    controller.listOfNotesForAnAuthor(accessToken, authorId, function(error, response, context) {

    
    });
```



### <a name="delete_note_for_author"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioAuthorsController.deleteNoteForAuthor") deleteNoteForAuthor

> TODO: Add Description


```javascript
function deleteNoteForAuthor(accessToken, authorId, commentId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| authorId |  ``` Required ```  | TODO: Add a parameter description |
| commentId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = access_token;
    var authorId = 'authorId';
    var commentId = 'commentId';

    controller.deleteNoteForAuthor(accessToken, authorId, commentId, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="sfmcsoap_triggered_email_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SFMCSOAPTriggeredEmailController") SFMCSOAPTriggeredEmailController

### Get singleton instance

The singleton instance of the ``` SFMCSOAPTriggeredEmailController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SFMCSOAPTriggeredEmailController;
```

### <a name="create_triggered_send_create_token"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCSOAPTriggeredEmailController.createTriggeredSendCreateToken") createTriggeredSendCreateToken

> TODO: Add Description


```javascript
function createTriggeredSendCreateToken(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'text/xml';
    var body = '<?xml version="1.0" encoding="UTF-8"?>\n<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">\n   <s:Header>\n      <a:Action s:mustUnderstand="1">Create</a:Action>\n      <a:MessageID>urn:uuid:7e0cca04-57bd-4481-864c-6ea8039d2ea0</a:MessageID>\n      <a:ReplyTo>\n         <a:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</a:Address>\n      </a:ReplyTo>\n      <a:To s:mustUnderstand="1">{{soapEndPoint}}</a:To>\n      <fueloauth xmlns="http://exacttarget.com">{{accessToken}}</fueloauth>\n   </s:Header>\n\t<s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">\n\t\t<CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">\n        <!--\n            <Options>\n             <SendResponseTo>\n      \t\t<ResponseType>email</ResponseType>\n      \t\t<ResponseAddress>your_address@salesforce.com</ResponseAddress>\n      \t\t<RespondWhen>OnCallComplete</RespondWhen>\n      \t\t<IncludeResults>true</IncludeResults>\n      \t\t<IncludeObjects>true</IncludeObjects>\n  \t\t   </SendResponseTo>\n             <RequestType>Asynchronous</RequestType>\n             <QueuePriority>High</QueuePriority>\n      \t    </Options>\n      \t-->\n\t\t\t<Objects xsi:type="TriggeredSend">\n\t\t\t    <!-- CANNOT DO WITH TOKEN\n                  <Client>\n                     <ID>1084813</ID>\n                  </Client>\n                CANNOT DO WITH TOKEN -->\n\t\t\t\t<PartnerKey xsi:nil="true"/>\n\t\t\t\t<ObjectID xsi:nil="true"/>\n                    <TriggeredSendDefinition>\n                      <CustomerKey>{{emailTSDCustomerKey}}</CustomerKey>\n                    </TriggeredSendDefinition>\n                    <Subscribers xsi:type="Subscriber">\n                      <SubscriberKey>subkey_001</SubscriberKey>\n                      <EmailAddress>your_address@salesforce.com</EmailAddress>\n                      <!--\n                      <Owner>\n                        <FromName>NTO Support</FromName>\n                        <FromAddress>NTO-support@salesforce.com</FromAddress>\n                      </Owner>\n                      -->\n                      <Attributes>\n                        <Name>Order Number</Name>\n                        <Value>987654</Value>\n                      </Attributes>\n                      <Attributes>\n                        <Name>Item Name</Name>\n                        <Value>Weezer Championship Socks</Value>\n                      </Attributes>\n                      <Attributes>\n                        <Name>Item Price</Name>\n                        <Value>53.99</Value>\n                      </Attributes>\n                      <Attributes>\n                        <Name>Quantity</Name>\n                        <Value>1</Value>\n                      </Attributes>\n                    </Subscribers>\n\t\t\t</Objects>\n\t\t</CreateRequest>\n\t</s:Body>\n</s:Envelope>';

    controller.createTriggeredSendCreateToken(contentType, body, function(error, response, context) {

    
    });
```



### <a name="create_triggered_send_create_up"></a>![Method: ](https://apidocs.io/img/method.png ".SFMCSOAPTriggeredEmailController.createTriggeredSendCreateUP") createTriggeredSendCreateUP

> TODO: Add Description


```javascript
function createTriggeredSendCreateUP(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'text/xml';
    var body = '<?xml version="1.0" encoding="UTF-8"?>\n<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">\n   <s:Header>\n      <a:Action s:mustUnderstand="1">Create</a:Action>\n      <a:MessageID>urn:uuid:7e0cca04-57bd-4481-864c-6ea8039d2ea0</a:MessageID>\n      <a:ReplyTo>\n         <a:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</a:Address>\n      </a:ReplyTo>\n      <a:To s:mustUnderstand="1">{{soapEndPoint}}</a:To>\n      <o:Security xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" s:mustUnderstand="1">\n         <o:UsernameToken>\n            <o:Username>{{soapUsername}}</o:Username>\n            <o:Password><![CDATA[{{soapPassword}}]]></o:Password>\n         </o:UsernameToken>\n      </o:Security>\n   </s:Header>\n\t<s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">\n\t\t<CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">\n\t\t<!--\n            <Options>\n             <SendResponseTo>\n      \t\t<ResponseType>email</ResponseType>\n      \t\t<ResponseAddress>jason.meketa@salesforce.com</ResponseAddress>\n      \t\t<RespondWhen>OnCallComplete</RespondWhen>\n      \t\t<IncludeResults>true</IncludeResults>\n      \t\t<IncludeObjects>true</IncludeObjects>\n  \t\t   </SendResponseTo>\n             <RequestType>Asynchronous</RequestType>\n             <QueuePriority>High</QueuePriority>\n      \t</Options>\n      \t-->\n\t\t\t<Objects xsi:type="TriggeredSend">\n\t\t\t    <!--\n                  <Client>\n                     <ID>1084813</ID>\n                  </Client>\n                -->\n                    <TriggeredSendDefinition>\n                      <CustomerKey>{{emailTSDCustomerKey}}</CustomerKey>\n                    </TriggeredSendDefinition>\n                    <Subscribers xsi:type="Subscriber">\n                      <SubscriberKey>subkey_001</SubscriberKey>\n                      <EmailAddress>your_address@salesforce.com</EmailAddress>\n                      <!--\n                      <Owner>\n                        <FromName>NTO Support</FromName>\n                        <FromAddress>NTO-support@salesforce.com</FromAddress>\n                      </Owner>\n                      -->\n                      <Attributes>\n                        <Name>Order Number</Name>\n                        <Value>123456</Value>\n                      </Attributes>\n                      <Attributes>\n                        <Name>Item Name</Name>\n                        <Value>Weezer All-Star Kicks</Value>\n                      </Attributes>\n                      <Attributes>\n                        <Name>Item Price</Name>\n                        <Value>219.99</Value>\n                      </Attributes>\n                      <Attributes>\n                        <Name>Quantity</Name>\n                        <Value>1</Value>\n                      </Attributes>\n                    </Subscribers>\n\t\t\t</Objects>\n\t\t</CreateRequest>\n\t</s:Body>\n</s:Envelope>';

    controller.createTriggeredSendCreateUP(contentType, body, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="social_studio_clients_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SocialStudioClientsController") SocialStudioClientsController

### Get singleton instance

The singleton instance of the ``` SocialStudioClientsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SocialStudioClientsController;
```

### <a name="list_client_details"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioClientsController.listClientDetails") listClientDetails

> TODO: Add Description


```javascript
function listClientDetails(accessToken, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = {{access_token}};

    controller.listClientDetails(accessToken, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="social_studio_engage_macros_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SocialStudioEngageMacrosController") SocialStudioEngageMacrosController

### Get singleton instance

The singleton instance of the ``` SocialStudioEngageMacrosController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SocialStudioEngageMacrosController;
```

### <a name="list_macros"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioEngageMacrosController.listMacros") listMacros

> TODO: Add Description


```javascript
function listMacros(accessToken, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = {{access_token}};

    controller.listMacros(accessToken, function(error, response, context) {

    
    });
```



### <a name="list_macro_details"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioEngageMacrosController.listMacroDetails") listMacroDetails

> TODO: Add Description


```javascript
function listMacroDetails(authToken, authAppkey, accept, contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authToken |  ``` Required ```  | TODO: Add a parameter description |
| authAppkey |  ``` Required ```  | TODO: Add a parameter description |
| accept |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var authToken = {{AutoIntShubSuperAuthToken}};
    var authAppkey = radian6-integration;
    var accept = 'application/json';
    var contentType = 'application/json';

    controller.listMacroDetails(authToken, authAppkey, accept, contentType, function(error, response, context) {

    
    });
```



### <a name="create_macro"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioEngageMacrosController.createMacro") createMacro

> TODO: Add Description


```javascript
function createMacro(accessToken, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = {{access_token}};
    var contentType = 'application/json';
    var body = new CreateMacroRequest({"name":"Urgent - Laptop Support Issue","description":"Urgent Laptop Issues to be adressed ASAP","actions":[{"type":"SetPriority","value":"3"},{"type":"AddPostNote","value":"Laptop"},{"type":"SendToSalesforceScs","value":"00DD00000007aAJMAY","parameters":[{"name":"case","value":"on"},{"name":"lead","value":"off"}]}]});

    controller.createMacro(accessToken, contentType, body, function(error, response, context) {

    
    });
```



### <a name="create_macro_all_actions"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioEngageMacrosController.createMacroAllActions") createMacroAllActions

> TODO: Add Description


```javascript
function createMacroAllActions(authToken, authAppkey, accept, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authToken |  ``` Required ```  | TODO: Add a parameter description |
| authAppkey |  ``` Required ```  | TODO: Add a parameter description |
| accept |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var authToken = {{maultAuthToken}};
    var authAppkey = radian6-integration;
    var accept = 'application/json';
    var contentType = 'application/json';
    var body = new CreateMacroAllActionsRequest({"name":"macro - 192 regress","description":"macrodescription","actions":[{"type":"AddPostTag","value":"192-regress-PT"},{"type":"AddSourceTag","value":"192-regress-ST"},{"type":"SetClassification","value":"3"},{"type":"AssignUser","value":"3594"},{"type":"SetEngagement","value":"1"},{"type":"SetPriority","value":"2"},{"type":"AddPostNote","value":"192-regress-post note"},{"type":"SetSentiment","value":"10"},{"type":"SetSpamStatus","value":"0"},{"type":"SendToSalesforceScs","value":"00DD00000007U9kMAE","parameters":[{"name":"case","value":"on"}]}]});

    controller.createMacroAllActions(authToken, authAppkey, accept, contentType, body, function(error, response, context) {

    
    });
```



### <a name="create_send_to_salesforce_macro"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioEngageMacrosController.createSendToSalesforceMacro") createSendToSalesforceMacro

> TODO: Add Description


```javascript
function createSendToSalesforceMacro(authToken, authAppkey, accept, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authToken |  ``` Required ```  | TODO: Add a parameter description |
| authAppkey |  ``` Required ```  | TODO: Add a parameter description |
| accept |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var authToken = {{maultAuthToken}};
    var authAppkey = radian6-integration;
    var accept = 'application/json';
    var contentType = 'application/json';
    var body = new CreateSendToSalesforceMacroRequest({"name":"marit macro lead on case off","description":"macrodescription","actions":[{"type":"AddPostTag","value":"lead and case,195 pt"},{"type":"AddSourceTag","value":"195 st"},{"type":"SetClassification","value":"3"},{"type":"AssignUser","value":"4"},{"type":"SetEngagement","value":"1"},{"type":"SetPriority","value":"2"},{"type":"AddPostNote","value":"195 post note"},{"type":"SetSentiment","value":"10"},{"type":"SetSpamStatus","value":"0"},{"type":"SendToSalesforceScs","value":"00DD00000007gAMMAY","parameters":[{"name":"case","value":"off"},{"name":"lead","value":"on"}]}]});

    controller.createSendToSalesforceMacro(authToken, authAppkey, accept, contentType, body, function(error, response, context) {

    
    });
```



### <a name="update_edit_macro"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioEngageMacrosController.updateEditMacro") updateEditMacro

> TODO: Add Description


```javascript
function updateEditMacro(authToken, authAppkey, accept, contentType, body, id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authToken |  ``` Required ```  | TODO: Add a parameter description |
| authAppkey |  ``` Required ```  | TODO: Add a parameter description |
| accept |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var authToken = auth_token;
    var authAppkey = auth_appkey;
    var accept = 'accept';
    var contentType = 'Content-Type';
    var body = new EditMacroRequest({"key":"value"});
    var id = 'id';

    controller.updateEditMacro(authToken, authAppkey, accept, contentType, body, id, function(error, response, context) {

    
    });
```



### <a name="create_execute_macro"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioEngageMacrosController.createExecuteMacro") createExecuteMacro

> TODO: Add Description


```javascript
function createExecuteMacro(method, contentType, accessToken, body, macroId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| method |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |
| macroId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var method = 'method';
    var contentType = 'Content-Type';
    var accessToken = access_token;
    var body = 'Body';
    var macroId = 'macroId';

    controller.createExecuteMacro(method, contentType, accessToken, body, macroId, function(error, response, context) {

    
    });
```



### <a name="delete_macro"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioEngageMacrosController.deleteMacro") deleteMacro

> TODO: Add Description


```javascript
function deleteMacro(authToken, authAppkey, accept, contentType, macroId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authToken |  ``` Required ```  | TODO: Add a parameter description |
| authAppkey |  ``` Required ```  | TODO: Add a parameter description |
| accept |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| macroId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var authToken = auth_token;
    var authAppkey = auth_appkey;
    var accept = 'accept';
    var contentType = 'Content-Type';
    var macroId = 'macroId';

    controller.deleteMacro(authToken, authAppkey, accept, contentType, macroId, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="social_studio_imported_published_post_metrics_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SocialStudioImportedPublishedPostMetricsController") SocialStudioImportedPublishedPostMetricsController

### Get singleton instance

The singleton instance of the ``` SocialStudioImportedPublishedPostMetricsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SocialStudioImportedPublishedPostMetricsController;
```

### <a name="list_posts_post_metrics"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioImportedPublishedPostMetricsController.listPostsPostMetrics") listPostsPostMetrics

> TODO: Add Description


```javascript
function listPostsPostMetrics(ostartDate, startDate, oendDate, endDate, accessToken, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| ostartDate |  ``` Required ```  | TODO: Add a parameter description |
| startDate |  ``` Required ```  | TODO: Add a parameter description |
| oendDate |  ``` Required ```  | TODO: Add a parameter description |
| endDate |  ``` Required ```  | TODO: Add a parameter description |
| accessToken |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var ostartDate = 1136500800000;
    var startDate = 1136500800;
    var oendDate = 1437105599999;
    var endDate = 1437105599;
    var accessToken = {{access_token}};

    controller.listPostsPostMetrics(ostartDate, startDate, oendDate, endDate, accessToken, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="social_studio_keyword_groups_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SocialStudioKeywordGroupsController") SocialStudioKeywordGroupsController

### Get singleton instance

The singleton instance of the ``` SocialStudioKeywordGroupsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SocialStudioKeywordGroupsController;
```

### <a name="list_topic_keyword_group_details"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioKeywordGroupsController.listTopicKeywordGroupDetails") listTopicKeywordGroupDetails

> TODO: Add Description


```javascript
function listTopicKeywordGroupDetails(accessToken, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = {{access_token}};

    controller.listTopicKeywordGroupDetails(accessToken, function(error, response, context) {

    
    });
```



### <a name="update_topic_keyword_group"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioKeywordGroupsController.updateTopicKeywordGroup") updateTopicKeywordGroup

> TODO: Add Description


```javascript
function updateTopicKeywordGroup(accessToken, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = access_token;
    var contentType = 'Content-Type';
    var body = new UpdateTopicKeywordGroupRequest({"key":"value"});

    controller.updateTopicKeywordGroup(accessToken, contentType, body, function(error, response, context) {

    
    });
```



### <a name="create_keyword_group"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioKeywordGroupsController.createKeywordGroup") createKeywordGroup

> TODO: Add Description


```javascript
function createKeywordGroup(accessToken, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = access_token;
    var contentType = 'Content-Type';
    var body = new CreateKeywordGroupRequest({"key":"value"});

    controller.createKeywordGroup(accessToken, contentType, body, function(error, response, context) {

    
    });
```



### <a name="update_keyword_group_in_a_topic_profile"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioKeywordGroupsController.updateKeywordGroupInATopicProfile") updateKeywordGroupInATopicProfile

> TODO: Add Description


```javascript
function updateKeywordGroupInATopicProfile(accessToken, contentType, body, tPID, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |
| tPID |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = access_token;
    var contentType = 'Content-Type';
    var body = new UpdateKeywordGroupInATopicProfileRequest({"key":"value"});
    var tPID = 'TPID';

    controller.updateKeywordGroupInATopicProfile(accessToken, contentType, body, tPID, function(error, response, context) {

    
    });
```



### <a name="delete_keyword_group_from_a_topic_profile"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioKeywordGroupsController.deleteKeywordGroupFromATopicProfile") deleteKeywordGroupFromATopicProfile

> TODO: Add Description


```javascript
function deleteKeywordGroupFromATopicProfile(accessToken, contentType, tPID, keywordGroupID, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| tPID |  ``` Required ```  | TODO: Add a parameter description |
| keywordGroupID |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = access_token;
    var contentType = 'Content-Type';
    var tPID = 'TPID';
    var keywordGroupID = 'keywordGroupID';

    controller.deleteKeywordGroupFromATopicProfile(accessToken, contentType, tPID, keywordGroupID, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="social_studio_languages_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SocialStudioLanguagesController") SocialStudioLanguagesController

### Get singleton instance

The singleton instance of the ``` SocialStudioLanguagesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SocialStudioLanguagesController;
```

### <a name="list_languages"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioLanguagesController.listLanguages") listLanguages

> TODO: Add Description


```javascript
function listLanguages(accessToken, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = {{access_token}};

    controller.listLanguages(accessToken, function(error, response, context) {

    
    });
```



### <a name="list_language_details"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioLanguagesController.listLanguageDetails") listLanguageDetails

> TODO: Add Description


```javascript
function listLanguageDetails(accessToken, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = {{access_token}};

    controller.listLanguageDetails(accessToken, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="social_studio_mediatypes_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SocialStudioMediatypesController") SocialStudioMediatypesController

### Get singleton instance

The singleton instance of the ``` SocialStudioMediatypesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SocialStudioMediatypesController;
```

### <a name="list_media_types"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioMediatypesController.listMediaTypes") listMediaTypes

> TODO: Add Description


```javascript
function listMediaTypes(accessToken, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = {{access_token}};

    controller.listMediaTypes(accessToken, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="social_studio_post_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SocialStudioPostController") SocialStudioPostController

### Get singleton instance

The singleton instance of the ``` SocialStudioPostController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SocialStudioPostController;
```

### <a name="list_posts_with_a_post_tag"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioPostController.listPostsWithAPostTag") listPostsWithAPostTag

> TODO: Add Description


```javascript
function listPostsWithAPostTag(topics, includeWorkflow, postLabel, accessToken, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| topics |  ``` Required ```  | TODO: Add a parameter description |
| includeWorkflow |  ``` Required ```  | TODO: Add a parameter description |
| postLabel |  ``` Required ```  | TODO: Add a parameter description |
| accessToken |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var topics = '{{MATPID}}';
    var includeWorkflow = true;
    var postLabel = '%23firstNBStorm';
    var accessToken = {{access_token}};

    controller.listPostsWithAPostTag(topics, includeWorkflow, postLabel, accessToken, function(error, response, context) {

    
    });
```



### <a name="list_posts_with_workflow_audit"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioPostController.listPostsWithWorkflowAudit") listPostsWithWorkflowAudit

> TODO: Add Description


```javascript
function listPostsWithWorkflowAudit(topics, includeAuditTrail, postLabel, startDate, accessToken, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| topics |  ``` Required ```  | TODO: Add a parameter description |
| includeAuditTrail |  ``` Required ```  | TODO: Add a parameter description |
| postLabel |  ``` Required ```  | TODO: Add a parameter description |
| startDate |  ``` Required ```  | TODO: Add a parameter description |
| accessToken |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var topics = '{{MATPID}}';
    var includeAuditTrail = true;
    var postLabel = '%23firstNBStorm';
    var startDate = 1450108943;
    var accessToken = {{access_token}};

    controller.listPostsWithWorkflowAudit(topics, includeAuditTrail, postLabel, startDate, accessToken, function(error, response, context) {

    
    });
```



### <a name="list_posts_per_assigned_user"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioPostController.listPostsPerAssignedUser") listPostsPerAssignedUser

> TODO: Add Description


```javascript
function listPostsPerAssignedUser(topics, includeWorkflow, assignedUser, accessToken, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| topics |  ``` Required ```  | TODO: Add a parameter description |
| includeWorkflow |  ``` Required ```  | TODO: Add a parameter description |
| assignedUser |  ``` Required ```  | TODO: Add a parameter description |
| accessToken |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var topics = '{{MATPID}}';
    var includeWorkflow = true;
    var assignedUser = '{{userId}}';
    var accessToken = {{access_token}};

    controller.listPostsPerAssignedUser(topics, includeWorkflow, assignedUser, accessToken, function(error, response, context) {

    
    });
```



### <a name="list_posts_within_a_timeframe"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioPostController.listPostsWithinATimeframe") listPostsWithinATimeframe

> TODO: Add Description


```javascript
function listPostsWithinATimeframe(topics, maxOffset, limit, accessToken, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| topics |  ``` Required ```  | TODO: Add a parameter description |
| maxOffset |  ``` Required ```  | TODO: Add a parameter description |
| limit |  ``` Required ```  | TODO: Add a parameter description |
| accessToken |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var topics = '{{MATPID}}';
    var maxOffset = 1843744091;
    var limit = 1;
    var accessToken = {{access_token}};

    controller.listPostsWithinATimeframe(topics, maxOffset, limit, accessToken, function(error, response, context) {

    
    });
```



### <a name="list_posts_between_start_end_date_in_ascending_order"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioPostController.listPostsBetweenStartEndDateInAscendingOrder") listPostsBetweenStartEndDateInAscendingOrder

> TODO: Add Description


```javascript
function listPostsBetweenStartEndDateInAscendingOrder(topics, startDate, endDate, sortBy, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| topics |  ``` Required ```  | TODO: Add a parameter description |
| startDate |  ``` Required ```  | TODO: Add a parameter description |
| endDate |  ``` Required ```  | TODO: Add a parameter description |
| sortBy |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var topics = '{{topicId}}';
    var startDate = 1425182400000;
    var endDate = 1427857200000;
    var sortBy = 'blogPostId-ascending';

    controller.listPostsBetweenStartEndDateInAscendingOrder(topics, startDate, endDate, sortBy, function(error, response, context) {

    
    });
```



### <a name="list_posts_by_id"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioPostController.listPostsByID") listPostsByID

> TODO: Add Description


```javascript
function listPostsByID(topics, includeWorkflow, beforeId, limit, accessToken, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| topics |  ``` Required ```  | TODO: Add a parameter description |
| includeWorkflow |  ``` Required ```  | TODO: Add a parameter description |
| beforeId |  ``` Required ```  | TODO: Add a parameter description |
| limit |  ``` Required ```  | TODO: Add a parameter description |
| accessToken |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var topics = 2857;
    var includeWorkflow = true;
    var beforeId = 1879741076;
    var limit = 1;
    var accessToken = {{access_token}};

    controller.listPostsByID(topics, includeWorkflow, beforeId, limit, accessToken, function(error, response, context) {

    
    });
```



### <a name="list_most_recent50_posts"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioPostController.listMostRecent50Posts") listMostRecent50Posts

> Get posts that match the topic within the last 24 hours.


```javascript
function listMostRecent50Posts(topics, limit, authAppkey, authToken, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| topics |  ``` Required ```  | TODO: Add a parameter description |
| limit |  ``` Required ```  | TODO: Add a parameter description |
| authAppkey |  ``` Required ```  | TODO: Add a parameter description |
| authToken |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var topics = '{{topicId}}';
    var limit = 50;
    var authAppkey = {{auth_appkey}};
    var authToken = {{auth_token}};

    controller.listMostRecent50Posts(topics, limit, authAppkey, authToken, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="social_studio_publish_approval_rules_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SocialStudioPublishApprovalRulesController") SocialStudioPublishApprovalRulesController

### Get singleton instance

The singleton instance of the ``` SocialStudioPublishApprovalRulesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SocialStudioPublishApprovalRulesController;
```

### <a name="list_hydrated_approval_rules_in_a_workspace"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioPublishApprovalRulesController.listHydratedApprovalRulesInAWorkspace") listHydratedApprovalRulesInAWorkspace

> TODO: Add Description


```javascript
function listHydratedApprovalRulesInAWorkspace(ownerType, ownerId, accessToken, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| ownerType |  ``` Required ```  | TODO: Add a parameter description |
| ownerId |  ``` Required ```  | TODO: Add a parameter description |
| accessToken |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var ownerType = 'workspace';
    var ownerId = '{{workspaceId}}';
    var accessToken = {{access_token}};

    controller.listHydratedApprovalRulesInAWorkspace(ownerType, ownerId, accessToken, function(error, response, context) {

    
    });
```



### <a name="list_approval_flow_aka_rule"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioPublishApprovalRulesController.listApprovalFlowAkaRule") listApprovalFlowAkaRule

> TODO: Add Description


```javascript
function listApprovalFlowAkaRule(accessToken, id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = access_token;
    var id = 'id';

    controller.listApprovalFlowAkaRule(accessToken, id, function(error, response, context) {

    
    });
```



### <a name="delete_approval_flow"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioPublishApprovalRulesController.deleteApprovalFlow") deleteApprovalFlow

> TODO: Add Description


```javascript
function deleteApprovalFlow(accessToken, approvalRule, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| approvalRule |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = access_token;
    var approvalRule = approval_rule;

    controller.deleteApprovalFlow(accessToken, approvalRule, function(error, response, context) {

    
    });
```



### <a name="create_approval_flow_aka_rule"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioPublishApprovalRulesController.createApprovalFlowAkaRule") createApprovalFlowAkaRule

> TODO: Add Description


```javascript
function createApprovalFlowAkaRule(accessToken, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = {{access_token}};
    var contentType = 'application/json';
    var body = new CreateApprovalFlowAkaRuleRequest({"name":"My Approval Rule - API","trigger":"Publish","priority":"21","workspace":"{{ws}}"});

    controller.createApprovalFlowAkaRule(accessToken, contentType, body, function(error, response, context) {

    
    });
```



### <a name="list_approval_prerequisites"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioPublishApprovalRulesController.listApprovalPrerequisites") listApprovalPrerequisites

> {
>   "status": true,
>   "response": {
>     "items": [
>       {
>         "criteria": "submitter",
>         "operator": "equals",
>         "argument": 219472
>       },
>       {
>         "criteria": "social account",
>         "operator": "equals",
>         "argument": 805927
>       }
>     ],
>     "query": "1 AND 2"
>   },
>   "meta": []
> }


```javascript
function listApprovalPrerequisites(accessToken, workspaceId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| workspaceId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = access_token;
    var workspaceId = 'workspaceId';

    controller.listApprovalPrerequisites(accessToken, workspaceId, function(error, response, context) {

    
    });
```



### <a name="create_approval_prerequisites"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioPublishApprovalRulesController.createApprovalPrerequisites") createApprovalPrerequisites

> {
>   "status": true,
>   "response": {
>     "items": [
>       {
>         "criteria": "submitter",
>         "operator": "equals",
>         "argument": 219472
>       },
>       {
>         "criteria": "social account",
>         "operator": "equals",
>         "argument": 805927
>       }
>     ],
>     "query": "1 AND 2"
>   },
>   "meta": []
> }


```javascript
function createApprovalPrerequisites(accessToken, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = {{access_token}};

    controller.createApprovalPrerequisites(accessToken, function(error, response, context) {

    
    });
```



### <a name="update_approval_prerequisites"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioPublishApprovalRulesController.updateApprovalPrerequisites") updateApprovalPrerequisites

> {
>   "status": true,
>   "response": {
>     "items": [
>       {
>         "criteria": "submitter",
>         "operator": "equals",
>         "argument": 219472
>       },
>       {
>         "criteria": "social account",
>         "operator": "equals",
>         "argument": 805927
>       }
>     ],
>     "query": "1 AND 2"
>   },
>   "meta": []
> }


```javascript
function updateApprovalPrerequisites(accessToken, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = {{access_token}};
    var body = '{\n    "items": [\n        {\n            "criteria": "submitter",\n            "operator": "equals",\n            "argument": "{{user}}\n        },\n        {\n            "criteria": "social account",\n            "operator": "equals",\n            "argument": {{social_property}}"\n        },\n        {\n            "criteria": "social account",\n            "operator": "equals",\n            "argument": "{{social_property2}}"\n        }\n    ],\n    "query": "(1 AND 2) OR ( 1 AND 3 )"\n}';

    controller.updateApprovalPrerequisites(accessToken, body, function(error, response, context) {

    
    });
```



### <a name="list_approval_procedures"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioPublishApprovalRulesController.listApprovalProcedures") listApprovalProcedures

> {
>   "status": true,
>   "response": {
>     "items": [
>       {
>         "criteria": "user",
>         "operator": "equals",
>         "argument": "219472",
>         "action": "approve"
>       }
>     ],
>     "query": "1"
>   },
>   "meta": []
> }


```javascript
function listApprovalProcedures(accessToken, workspaceId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| workspaceId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = access_token;
    var workspaceId = 'workspaceId';

    controller.listApprovalProcedures(accessToken, workspaceId, function(error, response, context) {

    
    });
```



### <a name="update_approval_procedures_errors"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioPublishApprovalRulesController.updateApprovalProceduresERRORS") updateApprovalProceduresERRORS

> {
>   "status": true,
>   "response": {
>     "items": [
>       {
>         "criteria": "submitter",
>         "operator": "equals",
>         "argument": 219472
>       },
>       {
>         "criteria": "social account",
>         "operator": "equals",
>         "argument": 805927
>       }
>     ],
>     "query": "1 AND 2"
>   },
>   "meta": []
> }


```javascript
function updateApprovalProceduresERRORS(accessToken, contentType, body, approvalRule, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |
| approvalRule |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = access_token;
    var contentType = 'Content-Type';
    var body = new ApprovalProceduresERRORSRequest({"key":"value"});
    var approvalRule = approval_rule;

    controller.updateApprovalProceduresERRORS(accessToken, contentType, body, approvalRule, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="social_studio_publish_labels_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SocialStudioPublishLabelsController") SocialStudioPublishLabelsController

### Get singleton instance

The singleton instance of the ``` SocialStudioPublishLabelsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SocialStudioPublishLabelsController;
```

### <a name="list_labels_in_a_workspace"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioPublishLabelsController.listLabelsInAWorkspace") listLabelsInAWorkspace

> TODO: Add Description


```javascript
function listLabelsInAWorkspace(workspaceId, accessToken, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| workspaceId |  ``` Required ```  | TODO: Add a parameter description |
| accessToken |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var workspaceId = {{ws}};
    var accessToken = {{access_token}};

    controller.listLabelsInAWorkspace(workspaceId, accessToken, function(error, response, context) {

    
    });
```



### <a name="delete_labels_from_a_workspace"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioPublishLabelsController.deleteLabelsFromAWorkspace") deleteLabelsFromAWorkspace

> TODO: Add Description


```javascript
function deleteLabelsFromAWorkspace(accessToken, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = {{access_token}};

    controller.deleteLabelsFromAWorkspace(accessToken, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="social_studio_regions_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SocialStudioRegionsController") SocialStudioRegionsController

### Get singleton instance

The singleton instance of the ``` SocialStudioRegionsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SocialStudioRegionsController;
```

### <a name="list_regions"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioRegionsController.listRegions") listRegions

> TODO: Add Description


```javascript
function listRegions(accessToken, contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = {{access_token}};
    var contentType = 'application/json';

    controller.listRegions(accessToken, contentType, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="social_studio_shared_content_clips_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SocialStudioSharedContentClipsController") SocialStudioSharedContentClipsController

### Get singleton instance

The singleton instance of the ``` SocialStudioSharedContentClipsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SocialStudioSharedContentClipsController;
```

### <a name="list_shared_content_items_in_ws"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioSharedContentClipsController.listSharedContentItemsInWS") listSharedContentItemsInWS

> TODO: Add Description


```javascript
function listSharedContentItemsInWS(workspace, accessToken, contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| workspace |  ``` Required ```  | TODO: Add a parameter description |
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var workspace = '{{ws}}';
    var accessToken = {{access_token}};
    var contentType = 'application/json';

    controller.listSharedContentItemsInWS(workspace, accessToken, contentType, function(error, response, context) {

    
    });
```



### <a name="create_shared_content_in_ws"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioSharedContentClipsController.createSharedContentInWS") createSharedContentInWS

> TODO: Add Description


```javascript
function createSharedContentInWS(accessToken, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = {{access_token}};
    var contentType = 'application/json';
    var body = new CreateSharedContentInWSRequest({"message":"Message text","description":"Optional description about why I am sharing this content to others","assets":[{"url":"http://images.website.org/my image.jpg","type":2,"metadata":""}],"workspaces":["88c282e3-b33e-4109-bb86-9040c368bf75"],"workspace_id":"{{ws}}"});

    controller.createSharedContentInWS(accessToken, contentType, body, function(error, response, context) {

    
    });
```



### <a name="delete_shared_content_in_ws"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioSharedContentClipsController.deleteSharedContentInWS") deleteSharedContentInWS

> TODO: Add Description


```javascript
function deleteSharedContentInWS(accessToken, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = {{access_token}};

    controller.deleteSharedContentInWS(accessToken, function(error, response, context) {

    
    });
```



### <a name="retrieve_shared_content"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioSharedContentClipsController.retrieveSharedContent") retrieveSharedContent

> TODO: Add Description


```javascript
function retrieveSharedContent(workspace, accessToken, contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| workspace |  ``` Required ```  | TODO: Add a parameter description |
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var workspace = '{{workspaceId}}';
    var accessToken = {{access_token}};
    var contentType = 'application/json';

    controller.retrieveSharedContent(workspace, accessToken, contentType, function(error, response, context) {

    
    });
```



### <a name="create_shared_content"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioSharedContentClipsController.createSharedContent") createSharedContent

> TODO: Add Description


```javascript
function createSharedContent(accessToken, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = {{access_token}};
    var body = new CreateSharedContentRequest({"message":"Create Clip via API","description":"sharing this clip","workspaces":["88c282e3-b33e-4109-bb86-9040c368bf75"],"workspace_id":"aa69ff7d-2b11-478a-9cc9-3fd3a5e1e19e"});

    controller.createSharedContent(accessToken, body, function(error, response, context) {

    
    });
```



### <a name="delete_shared_content"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioSharedContentClipsController.deleteSharedContent") deleteSharedContent

> TODO: Add Description


```javascript
function deleteSharedContent(accessToken, workspaceId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| workspaceId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = access_token;
    var workspaceId = 'workspaceId';

    controller.deleteSharedContent(accessToken, workspaceId, function(error, response, context) {

    
    });
```



### <a name="create_share_unshare_content"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioSharedContentClipsController.createShareUnshareContent") createShareUnshareContent

> TODO: Add Description


```javascript
function createShareUnshareContent(action, accessToken, body, clipsId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| action |  ``` Required ```  | TODO: Add a parameter description |
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |
| clipsId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var action = 'action';
    var accessToken = access_token;
    var body = 'Body';
    var clipsId = 'clipsId';

    controller.createShareUnshareContent(action, accessToken, body, clipsId, function(error, response, context) {

    
    });
```



### <a name="create_archive_anarchive_shared_content"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioSharedContentClipsController.createArchiveAnarchiveSharedContent") createArchiveAnarchiveSharedContent

> TODO: Add Description


```javascript
function createArchiveAnarchiveSharedContent(action, accessToken, clipsId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| action |  ``` Required ```  | TODO: Add a parameter description |
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| clipsId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var action = 'action';
    var accessToken = access_token;
    var clipsId = 'clipsId';

    controller.createArchiveAnarchiveSharedContent(action, accessToken, clipsId, function(error, response, context) {

    
    });
```



### <a name="create_shared_content_image_type_from_scratch_in_ws"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioSharedContentClipsController.createSharedContentImageTypeFromScratchInWS") createSharedContentImageTypeFromScratchInWS

> TODO: Add Description


```javascript
function createSharedContentImageTypeFromScratchInWS(accessToken, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = {{access_token}};
    var contentType = 'application/json';
    var body = new CreateSharedContentImageTypeFromScratchInWSRequest({"message":"Message text","description":"Optional description about why I am sharing this content to others","assets":[{"url":"/Users/abigail.grant/Pictures/NTO/winter hat.ong","type":2,"metadata":""}],"workspaces":["88c282e3-b33e-4109-bb86-9040c368bf75"],"workspace_id":"{{ws}}"});

    controller.createSharedContentImageTypeFromScratchInWS(accessToken, contentType, body, function(error, response, context) {

    
    });
```



### <a name="create_shared_content_and_associate_it_with_post"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioSharedContentClipsController.createSharedContentAndAssociateItWithPost") createSharedContentAndAssociateItWithPost

> TODO: Add Description


```javascript
function createSharedContentAndAssociateItWithPost(accessToken, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = {{access_token}};
    var contentType = 'application/json';
    var body = new CreateSharedContentAndAssociateItWithPostRequest({"post_id":"35a66d0d-aef8-4ad4-be83-a616c445d9fe","message":"This duplicates that content from an existing post into a new piece of shared content, and associates them together when measuring performance of content.","description":"This image did very well on Pinterest, please try it on your regional accounts.","assets":[{"url":"http://www.foo.com/images/foo.png","type":2}],"workspaces":["88c282e3-b33e-4109-bb86-9040c368bf75"],"workspace_id":"{{ws}}"});

    controller.createSharedContentAndAssociateItWithPost(accessToken, contentType, body, function(error, response, context) {

    
    });
```



### <a name="create_archive_shared_content"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioSharedContentClipsController.createArchiveSharedContent") createArchiveSharedContent

> TODO: Add Description


```javascript
function createArchiveSharedContent(action, accessToken, contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| action |  ``` Required ```  | TODO: Add a parameter description |
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var action = 'archive';
    var accessToken = {{access_token}};
    var contentType = 'application/json';

    controller.createArchiveSharedContent(action, accessToken, contentType, function(error, response, context) {

    
    });
```



### <a name="create_unshare_shared_content"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioSharedContentClipsController.createUnshareSharedContent") createUnshareSharedContent

> TODO: Add Description


```javascript
function createUnshareSharedContent(action, accessToken, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| action |  ``` Required ```  | TODO: Add a parameter description |
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var action = 'unshare';
    var accessToken = {{access_token}};
    var contentType = 'application/json';
    var body = new UnshareSharedContentRequest({"workspaces":["a0fd4ce7-af4c-48b1-b6e8-0cb4ce54b2fc"]});

    controller.createUnshareSharedContent(action, accessToken, contentType, body, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="social_studio_short_ur_ls_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SocialStudioShortURLsController") SocialStudioShortURLsController

### Get singleton instance

The singleton instance of the ``` SocialStudioShortURLsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SocialStudioShortURLsController;
```

### <a name="retrieve_short_urls_in_a_workspace"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioShortURLsController.retrieveShortUrlsInAWorkspace") retrieveShortUrlsInAWorkspace

> TODO: Add Description


```javascript
function retrieveShortUrlsInAWorkspace(workspace, accessToken, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| workspace |  ``` Required ```  | TODO: Add a parameter description |
| accessToken |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var workspace = '{{workspaceId}}';
    var accessToken = {{access_token}};

    controller.retrieveShortUrlsInAWorkspace(workspace, accessToken, function(error, response, context) {

    
    });
```



### <a name="retrieve_short_url"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioShortURLsController.retrieveShortUrl") retrieveShortUrl

> TODO: Add Description


```javascript
function retrieveShortUrl(accessToken, shortUrlId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| shortUrlId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = access_token;
    var shortUrlId = 'shortUrlId';

    controller.retrieveShortUrl(accessToken, shortUrlId, function(error, response, context) {

    
    });
```



### <a name="create_short_url"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioShortURLsController.createShortURL") createShortURL

> TODO: Add Description


```javascript
function createShortURL(accessToken, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = {{access_token}};
    var body = {};

    controller.createShortURL(accessToken, body, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="social_studio_social_accounts_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SocialStudioSocialAccountsController") SocialStudioSocialAccountsController

### Get singleton instance

The singleton instance of the ``` SocialStudioSocialAccountsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SocialStudioSocialAccountsController;
```

### <a name="list_social_properties"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioSocialAccountsController.listSocialProperties") listSocialProperties

> TODO: Add Description


```javascript
function listSocialProperties(accessToken, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = {{access_token}};

    controller.listSocialProperties(accessToken, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="social_studio_sources_and_source_groups_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SocialStudioSourcesAndSourceGroupsController") SocialStudioSourcesAndSourceGroupsController

### Get singleton instance

The singleton instance of the ``` SocialStudioSourcesAndSourceGroupsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SocialStudioSourcesAndSourceGroupsController;
```

### <a name="list_source_groups"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioSourcesAndSourceGroupsController.listSourceGroups") listSourceGroups

> TODO: Add Description


```javascript
function listSourceGroups(accessToken, contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = {{access_token}};
    var contentType = 'application/json';

    controller.listSourceGroups(accessToken, contentType, function(error, response, context) {

    
    });
```



### <a name="create_source_group"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioSourcesAndSourceGroupsController.createSourceGroup") createSourceGroup

> TODO: Add Description


```javascript
function createSourceGroup(accessToken, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = {{access_token}};
    var contentType = 'application/json';
    var body = new CreateSourceGroupRequest({"title":"New source group created via API","description":"A description of what this source group contains.","public":false});

    controller.createSourceGroup(accessToken, contentType, body, function(error, response, context) {

    
    });
```



### <a name="update_source_group"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioSourcesAndSourceGroupsController.updateSourceGroup") updateSourceGroup

> TODO: Add Description


```javascript
function updateSourceGroup(accessToken, contentType, body, id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = access_token;
    var contentType = 'Content-Type';
    var body = new UpdateSourceGroupRequest({"key":"value"});
    var id = 'id';

    controller.updateSourceGroup(accessToken, contentType, body, id, function(error, response, context) {

    
    });
```



### <a name="delete_source_group"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioSourcesAndSourceGroupsController.deleteSourceGroup") deleteSourceGroup

> TODO: Add Description


```javascript
function deleteSourceGroup(accessToken, contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = {{access_token}};
    var contentType = 'application/json';

    controller.deleteSourceGroup(accessToken, contentType, function(error, response, context) {

    
    });
```



### <a name="list_sources_in_a_group"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioSourcesAndSourceGroupsController.listSourcesInAGroup") listSourcesInAGroup

> TODO: Add Description


```javascript
function listSourcesInAGroup(accessToken, contentType, sourceFilterQueryId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| sourceFilterQueryId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = access_token;
    var contentType = 'Content-Type';
    var sourceFilterQueryId = 'sourceFilterQueryId';

    controller.listSourcesInAGroup(accessToken, contentType, sourceFilterQueryId, function(error, response, context) {

    
    });
```



### <a name="list_source_in_a_group"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioSourcesAndSourceGroupsController.listSourceInAGroup") listSourceInAGroup

> TODO: Add Description


```javascript
function listSourceInAGroup(accessToken, contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = {{access_token}};
    var contentType = 'application/json';

    controller.listSourceInAGroup(accessToken, contentType, function(error, response, context) {

    
    });
```



### <a name="create_source"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioSourcesAndSourceGroupsController.createSource") createSource

> TODO: Add Description


```javascript
function createSource(accessToken, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = {{access_token}};
    var contentType = 'application/json';
    var body = new CreateSourceRequest({"title":"","uri":"https://twitter.com/LAVAgency234"});

    controller.createSource(accessToken, contentType, body, function(error, response, context) {

    
    });
```



### <a name="update_source"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioSourcesAndSourceGroupsController.updateSource") updateSource

> TODO: Add Description


```javascript
function updateSource(accessToken, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = {{access_token}};
    var contentType = 'application/json';
    var body = new UpdateSourceRequest({"title":"","uri":"https://twitter.com/LAVAgency1"});

    controller.updateSource(accessToken, contentType, body, function(error, response, context) {

    
    });
```



### <a name="delete_source"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioSourcesAndSourceGroupsController.deleteSource") deleteSource

> TODO: Add Description


```javascript
function deleteSource(accessToken, contentType, sourceFilterId, sourceFilterQueryId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| sourceFilterId |  ``` Required ```  | TODO: Add a parameter description |
| sourceFilterQueryId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = access_token;
    var contentType = 'Content-Type';
    var sourceFilterId = 'sourceFilterId';
    var sourceFilterQueryId = 'sourceFilterQueryId';

    controller.deleteSource(accessToken, contentType, sourceFilterId, sourceFilterQueryId, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="social_studio_topic_profiles_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SocialStudioTopicProfilesController") SocialStudioTopicProfilesController

### Get singleton instance

The singleton instance of the ``` SocialStudioTopicProfilesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SocialStudioTopicProfilesController;
```

### <a name="list_topics"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioTopicProfilesController.listTopics") listTopics

> TODO: Add Description


```javascript
function listTopics(accessToken, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = {{access_token}};

    controller.listTopics(accessToken, function(error, response, context) {

    
    });
```



### <a name="list_topic"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioTopicProfilesController.listTopic") listTopic

> TODO: Add Description


```javascript
function listTopic(accessToken, tPID, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| tPID |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = access_token;
    var tPID = 'TPID';

    controller.listTopic(accessToken, tPID, function(error, response, context) {

    
    });
```



### <a name="list_topics_by_name"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioTopicProfilesController.listTopicsByName") listTopicsByName

> TODO: Add Description


```javascript
function listTopicsByName(q, accessToken, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| q |  ``` Required ```  | TODO: Add a parameter description |
| accessToken |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var q = 'winter';
    var accessToken = {{access_token}};

    controller.listTopicsByName(q, accessToken, function(error, response, context) {

    
    });
```



### <a name="list_topics_by_status_and_creation"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioTopicProfilesController.listTopicsByStatusAndCreation") listTopicsByStatusAndCreation

> TODO: Add Description


```javascript
function listTopicsByStatusAndCreation(limit, offset, orderBy, status, accessToken, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| limit |  ``` Required ```  | TODO: Add a parameter description |
| offset |  ``` Required ```  | TODO: Add a parameter description |
| orderBy |  ``` Required ```  | TODO: Add a parameter description |
| status |  ``` Required ```  | TODO: Add a parameter description |
| accessToken |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var limit = 5;
    var offset = 0;
    var orderBy = 'creation asc';
    var status = 1;
    var accessToken = {{access_token}};

    controller.listTopicsByStatusAndCreation(limit, offset, orderBy, status, accessToken, function(error, response, context) {

    
    });
```



### <a name="create_topic"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioTopicProfilesController.createTopic") createTopic

> TODO: Add Description


```javascript
function createTopic(accessToken, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = {{access_token}};
    var contentType = 'application/json';
    var body = new CreateTopicRequest({"title":"API Test TP3","languages":["1"],"mediaTypes":[{"id":"5"},{"id":"1"},{"id":"10"}]});

    controller.createTopic(accessToken, contentType, body, function(error, response, context) {

    
    });
```



### <a name="update_topic"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioTopicProfilesController.updateTopic") updateTopic

> TODO: Add Description


```javascript
function updateTopic(accessToken, contentType, body, tPID, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |
| tPID |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = access_token;
    var contentType = 'Content-Type';
    var body = new UpdateTopicRequest({"key":"value"});
    var tPID = 'TPID';

    controller.updateTopic(accessToken, contentType, body, tPID, function(error, response, context) {

    
    });
```



### <a name="create_activate_topic"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioTopicProfilesController.createActivateTopic") createActivateTopic

> TODO: Add Description


```javascript
function createActivateTopic(method, billingCode, accessToken, contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| method |  ``` Required ```  | TODO: Add a parameter description |
| billingCode |  ``` Required ```  | TODO: Add a parameter description |
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var method = 'activate';
    var billingCode = '{billingCode}';
    var accessToken = {{access_token}};
    var contentType = 'application/json';

    controller.createActivateTopic(method, billingCode, accessToken, contentType, function(error, response, context) {

    
    });
```



### <a name="delete_topic"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioTopicProfilesController.deleteTopic") deleteTopic

> TODO: Add Description


```javascript
function deleteTopic(accessToken, contentType, id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = access_token;
    var contentType = 'Content-Type';
    var id = 'id';

    controller.deleteTopic(accessToken, contentType, id, function(error, response, context) {

    
    });
```



### <a name="update_keyword_group_in_a_topic_profile_copy"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioTopicProfilesController.updateKeywordGroupInATopicProfileCopy") updateKeywordGroupInATopicProfileCopy

> TODO: Add Description


```javascript
function updateKeywordGroupInATopicProfileCopy(accessToken, contentType, body, tPID, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |
| tPID |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = access_token;
    var contentType = 'Content-Type';
    var body = new UpdateKeywordGroupInATopicProfileCopyRequest({"key":"value"});
    var tPID = 'TPID';

    controller.updateKeywordGroupInATopicProfileCopy(accessToken, contentType, body, tPID, function(error, response, context) {

    
    });
```



### <a name="delete_keyword_group_from_a_topic_profile_copy"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioTopicProfilesController.deleteKeywordGroupFromATopicProfileCopy") deleteKeywordGroupFromATopicProfileCopy

> TODO: Add Description


```javascript
function deleteKeywordGroupFromATopicProfileCopy(accessToken, contentType, tPID, keywordGroupID, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| tPID |  ``` Required ```  | TODO: Add a parameter description |
| keywordGroupID |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = access_token;
    var contentType = 'Content-Type';
    var tPID = 'TPID';
    var keywordGroupID = 'keywordGroupID';

    controller.deleteKeywordGroupFromATopicProfileCopy(accessToken, contentType, tPID, keywordGroupID, function(error, response, context) {

    
    });
```



### <a name="update_source_group_in_a_topic_profile"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioTopicProfilesController.updateSourceGroupInATopicProfile") updateSourceGroupInATopicProfile

> TODO: Add Description


```javascript
function updateSourceGroupInATopicProfile(accessToken, contentType, body, tPID, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |
| tPID |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = access_token;
    var contentType = 'Content-Type';
    var body = new UpdateSourceGroupInATopicProfileRequest({"key":"value"});
    var tPID = 'TPID';

    controller.updateSourceGroupInATopicProfile(accessToken, contentType, body, tPID, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="social_studio_users_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SocialStudioUsersController") SocialStudioUsersController

### Get singleton instance

The singleton instance of the ``` SocialStudioUsersController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SocialStudioUsersController;
```

### <a name="list_users"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioUsersController.listUsers") listUsers

> TODO: Add Description


```javascript
function listUsers(accessToken, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = {{access_token}};

    controller.listUsers(accessToken, function(error, response, context) {

    
    });
```



### <a name="get_user_details"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioUsersController.getUserDetails") getUserDetails

> TODO: Add Description


```javascript
function getUserDetails(accessToken, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = {{access_token}};

    controller.getUserDetails(accessToken, function(error, response, context) {

    
    });
```



### <a name="create_user"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioUsersController.createUser") createUser

> TODO: Add Description


```javascript
function createUser(accessToken, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = {{access_token}};
    var contentType = 'application/json';
    var body = ' {\n    "title": "API User",\n    "username": "APIUser",\n    "displayName": API User",\n    "email": "bill@gmail.com",\n    "timeZone": "Europe/London",\n    "enabled": true,\n    "avatarURL": null,\n    "userRoleId": 6,\n    "orgRoleId": 1,\n    "languageId": 1,\n    "clientId": 1\n  }';

    controller.createUser(accessToken, contentType, body, function(error, response, context) {

    
    });
```



### <a name="update_user"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioUsersController.updateUser") updateUser

> TODO: Add Description


```javascript
function updateUser(accessToken, contentType, body, userId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |
| userId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = access_token;
    var contentType = 'Content-Type';
    var body = new UpdateUserRequest({"key":"value"});
    var userId = 'userId';

    controller.updateUser(accessToken, contentType, body, userId, function(error, response, context) {

    
    });
```



### <a name="create_reset_user_password"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioUsersController.createResetUserPassword") createResetUserPassword

> TODO: Add Description


```javascript
function createResetUserPassword(method, accessToken, contentType, userId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| method |  ``` Required ```  | TODO: Add a parameter description |
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| userId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var method = 'method';
    var accessToken = access_token;
    var contentType = 'Content-Type';
    var userId = 'userId';

    controller.createResetUserPassword(method, accessToken, contentType, userId, function(error, response, context) {

    
    });
```



### <a name="change_user_password"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioUsersController.changeUserPassword") changeUserPassword

> TODO: Add Description


```javascript
function changeUserPassword(method, accessToken, contentType, body, userId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| method |  ``` Required ```  | TODO: Add a parameter description |
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |
| userId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var method = 'method';
    var accessToken = access_token;
    var contentType = 'Content-Type';
    var body = new ChangeUserPasswordRequest({"key":"value"});
    var userId = 'userId';

    controller.changeUserPassword(method, accessToken, contentType, body, userId, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="social_studio_workspaces_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SocialStudioWorkspacesController") SocialStudioWorkspacesController

### Get singleton instance

The singleton instance of the ``` SocialStudioWorkspacesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SocialStudioWorkspacesController;
```

### <a name="get_workspaces_in_org"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioWorkspacesController.getWorkspacesInOrg") getWorkspacesInOrg

> TODO: Add Description


```javascript
function getWorkspacesInOrg(accessToken, contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = {{access_token}};
    var contentType = 'application/json';

    controller.getWorkspacesInOrg(accessToken, contentType, function(error, response, context) {

    
    });
```



### <a name="get_workspace_details"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioWorkspacesController.getWorkspaceDetails") getWorkspaceDetails

> TODO: Add Description


```javascript
function getWorkspaceDetails(accessToken, contentType, workspaceId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| workspaceId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = access_token;
    var contentType = 'Content-Type';
    var workspaceId = 'workspaceId';

    controller.getWorkspaceDetails(accessToken, contentType, workspaceId, function(error, response, context) {

    
    });
```



### <a name="create_aws"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioWorkspacesController.createAWS") createAWS

> TODO: Add Description


```javascript
function createAWS(accessToken, contentType, body, workspaceId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |
| workspaceId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = access_token;
    var contentType = 'Content-Type';
    var body = new CreateAWSRequest({"key":"value"});
    var workspaceId = 'workspaceId';

    controller.createAWS(accessToken, contentType, body, workspaceId, function(error, response, context) {

    
    });
```



### <a name="update_a_workspace"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioWorkspacesController.updateAWorkspace") updateAWorkspace

> TODO: Add Description


```javascript
function updateAWorkspace(accessToken, contentType, body, workspaceId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |
| workspaceId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = access_token;
    var contentType = 'Content-Type';
    var body = new UpdateAWorkspaceRequest({"key":"value"});
    var workspaceId = 'workspaceId';

    controller.updateAWorkspace(accessToken, contentType, body, workspaceId, function(error, response, context) {

    
    });
```



### <a name="delete_a_workspace"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioWorkspacesController.deleteAWorkspace") deleteAWorkspace

> TODO: Add Description


```javascript
function deleteAWorkspace(accessToken, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = {{access_token}};
    var contentType = 'application/json';
    var body = new DeleteAWorkspaceRequest({"visibility":"public","name":"Sample Workspace","description":"Workspace created via API"});

    controller.deleteAWorkspace(accessToken, contentType, body, function(error, response, context) {

    
    });
```



### <a name="create_publish_macro_to_aws"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioWorkspacesController.createPublishMacroToAWS") createPublishMacroToAWS

> TODO: Add Description


```javascript
function createPublishMacroToAWS(accessToken, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = {{access_token}};
    var contentType = 'application/json';
    var body = new PublishMacroToAWSRequest({"workspace_id":"{{ws}}","resource_type":"publish_macro","resource_id":"{{publish_macro}}"});

    controller.createPublishMacroToAWS(accessToken, contentType, body, function(error, response, context) {

    
    });
```



### <a name="delete_publish_macro_removed_from_ws"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioWorkspacesController.deletePublishMacroRemovedFromWS") deletePublishMacroRemovedFromWS

> TODO: Add Description


```javascript
function deletePublishMacroRemovedFromWS(accessToken, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = {{access_token}};
    var contentType = 'application/json';
    var body = new PublishMacroRemovedFromWSRequest({"workspace_id":"{{ws}}","resource_type":"publish_macro","resource_id":"{{publish_macro}}"});

    controller.deletePublishMacroRemovedFromWS(accessToken, contentType, body, function(error, response, context) {

    
    });
```



### <a name="create_user_to_aws"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioWorkspacesController.createUserToAWS") createUserToAWS

> TODO: Add Description


```javascript
function createUserToAWS(accessToken, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = {{access_token}};
    var contentType = 'application/json';
    var body = new UserToAWSRequest({"workspace_id":"{{ws}}","resource_type":"user","resource_id":"{{user}}","access":"admin"});

    controller.createUserToAWS(accessToken, contentType, body, function(error, response, context) {

    
    });
```



### <a name="delete_user_removed_from_ws"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioWorkspacesController.deleteUserRemovedFromWS") deleteUserRemovedFromWS

> TODO: Add Description


```javascript
function deleteUserRemovedFromWS(accessToken, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = {{access_token}};
    var contentType = 'application/json';
    var body = new UserRemovedFromWSRequest({"workspace_id":"{{ws}}","resource_type":"user","resource_id":"{{user}}"});

    controller.deleteUserRemovedFromWS(accessToken, contentType, body, function(error, response, context) {

    
    });
```



### <a name="create_engage_macro_to_aws"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioWorkspacesController.createEngageMacroToAWS") createEngageMacroToAWS

> TODO: Add Description


```javascript
function createEngageMacroToAWS(accessToken, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = {{access_token}};
    var contentType = 'application/json';
    var body = new EngageMacroToAWSRequest({"workspace_id":"{{ws}}","resource_type":"engage_macro","resource_id":"{{engage_macro}}"});

    controller.createEngageMacroToAWS(accessToken, contentType, body, function(error, response, context) {

    
    });
```



### <a name="delete_engage_macro_removed_from_ws"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioWorkspacesController.deleteEngageMacroRemovedFromWS") deleteEngageMacroRemovedFromWS

> TODO: Add Description


```javascript
function deleteEngageMacroRemovedFromWS(accessToken, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = {{access_token}};
    var contentType = 'application/json';
    var body = new EngageMacroRemovedFromWSRequest({"workspace_id":"{{ws}}","resource_type":"engage_macro","resource_id":"{{engage_macro}}"});

    controller.deleteEngageMacroRemovedFromWS(accessToken, contentType, body, function(error, response, context) {

    
    });
```



### <a name="create_topic_profile_to_aws"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioWorkspacesController.createTopicProfileToAWS") createTopicProfileToAWS

> TODO: Add Description


```javascript
function createTopicProfileToAWS(accessToken, workspaceId, resourceType, resourceId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| workspaceId |  ``` Required ```  | TODO: Add a parameter description |
| resourceType |  ``` Required ```  | TODO: Add a parameter description |
| resourceId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = {{access_token}};
    var workspaceId = {{ws}};
    var resourceType = topic_profile;
    var resourceId = {topic_profile}};

    controller.createTopicProfileToAWS(accessToken, workspaceId, resourceType, resourceId, function(error, response, context) {

    
    });
```



### <a name="create_template_to_aws"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioWorkspacesController.createTemplateToAWS") createTemplateToAWS

> TODO: Add Description


```javascript
function createTemplateToAWS(accessToken, workspaceId, resourceType, resourceId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| workspaceId |  ``` Required ```  | TODO: Add a parameter description |
| resourceType |  ``` Required ```  | TODO: Add a parameter description |
| resourceId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = {{access_token}};
    var workspaceId = {{ws}};
    var resourceType = template;
    var resourceId = {{template}};

    controller.createTemplateToAWS(accessToken, workspaceId, resourceType, resourceId, function(error, response, context) {

    
    });
```



### <a name="create_social_property_to_aws"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioWorkspacesController.createSocialPropertyToAWS") createSocialPropertyToAWS

> TODO: Add Description


```javascript
function createSocialPropertyToAWS(accessToken, workspaceId, resourceType, resourceId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| workspaceId |  ``` Required ```  | TODO: Add a parameter description |
| resourceType |  ``` Required ```  | TODO: Add a parameter description |
| resourceId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = {{access_token}};
    var workspaceId = {{ws}};
    var resourceType = social_property;
    var resourceId = {{social_property}};

    controller.createSocialPropertyToAWS(accessToken, workspaceId, resourceType, resourceId, function(error, response, context) {

    
    });
```



### <a name="delete_social_property_removed_from_ws"></a>![Method: ](https://apidocs.io/img/method.png ".SocialStudioWorkspacesController.deleteSocialPropertyRemovedFromWS") deleteSocialPropertyRemovedFromWS

> TODO: Add Description


```javascript
function deleteSocialPropertyRemovedFromWS(accessToken, workspaceId, resourceType, resourceId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accessToken |  ``` Required ```  | TODO: Add a parameter description |
| workspaceId |  ``` Required ```  | TODO: Add a parameter description |
| resourceType |  ``` Required ```  | TODO: Add a parameter description |
| resourceId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accessToken = {{access_token}};
    var workspaceId = {{ws}};
    var resourceType = social_property;
    var resourceId = {{social_property}};

    controller.deleteSocialPropertyRemovedFromWS(accessToken, workspaceId, resourceType, resourceId, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)



