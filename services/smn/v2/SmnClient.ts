import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AddSubscriptionRequest } from './model/AddSubscriptionRequest';
import { AddSubscriptionRequestBody } from './model/AddSubscriptionRequestBody';
import { AddSubscriptionResponse } from './model/AddSubscriptionResponse';
import { ApplicationEndpoint } from './model/ApplicationEndpoint';
import { ApplicationItem } from './model/ApplicationItem';
import { BatchCreateOrDeleteResourceTagsRequest } from './model/BatchCreateOrDeleteResourceTagsRequest';
import { BatchCreateOrDeleteResourceTagsRequestBody } from './model/BatchCreateOrDeleteResourceTagsRequestBody';
import { BatchCreateOrDeleteResourceTagsResponse } from './model/BatchCreateOrDeleteResourceTagsResponse';
import { CancelSubscriptionRequest } from './model/CancelSubscriptionRequest';
import { CancelSubscriptionResponse } from './model/CancelSubscriptionResponse';
import { CreateApplicationEndpointRequest } from './model/CreateApplicationEndpointRequest';
import { CreateApplicationEndpointRequestBody } from './model/CreateApplicationEndpointRequestBody';
import { CreateApplicationEndpointResponse } from './model/CreateApplicationEndpointResponse';
import { CreateApplicationRequest } from './model/CreateApplicationRequest';
import { CreateApplicationRequestBody } from './model/CreateApplicationRequestBody';
import { CreateApplicationResponse } from './model/CreateApplicationResponse';
import { CreateMessageTemplateRequest } from './model/CreateMessageTemplateRequest';
import { CreateMessageTemplateRequestBody } from './model/CreateMessageTemplateRequestBody';
import { CreateMessageTemplateResponse } from './model/CreateMessageTemplateResponse';
import { CreateResourceTagRequest } from './model/CreateResourceTagRequest';
import { CreateResourceTagRequestBody } from './model/CreateResourceTagRequestBody';
import { CreateResourceTagRequestBodyTag } from './model/CreateResourceTagRequestBodyTag';
import { CreateResourceTagResponse } from './model/CreateResourceTagResponse';
import { CreateTopicRequest } from './model/CreateTopicRequest';
import { CreateTopicRequestBody } from './model/CreateTopicRequestBody';
import { CreateTopicResponse } from './model/CreateTopicResponse';
import { DeleteApplicationEndpointRequest } from './model/DeleteApplicationEndpointRequest';
import { DeleteApplicationEndpointResponse } from './model/DeleteApplicationEndpointResponse';
import { DeleteApplicationRequest } from './model/DeleteApplicationRequest';
import { DeleteApplicationResponse } from './model/DeleteApplicationResponse';
import { DeleteMessageTemplateRequest } from './model/DeleteMessageTemplateRequest';
import { DeleteMessageTemplateResponse } from './model/DeleteMessageTemplateResponse';
import { DeleteResourceTagRequest } from './model/DeleteResourceTagRequest';
import { DeleteResourceTagResponse } from './model/DeleteResourceTagResponse';
import { DeleteTopicAttributeByNameRequest } from './model/DeleteTopicAttributeByNameRequest';
import { DeleteTopicAttributeByNameResponse } from './model/DeleteTopicAttributeByNameResponse';
import { DeleteTopicAttributesRequest } from './model/DeleteTopicAttributesRequest';
import { DeleteTopicAttributesResponse } from './model/DeleteTopicAttributesResponse';
import { DeleteTopicRequest } from './model/DeleteTopicRequest';
import { DeleteTopicResponse } from './model/DeleteTopicResponse';
import { LinksItem } from './model/LinksItem';
import { ListApplicationAttributesRequest } from './model/ListApplicationAttributesRequest';
import { ListApplicationAttributesResponse } from './model/ListApplicationAttributesResponse';
import { ListApplicationAttributesResponseBodyAttributes } from './model/ListApplicationAttributesResponseBodyAttributes';
import { ListApplicationEndpointAttributesRequest } from './model/ListApplicationEndpointAttributesRequest';
import { ListApplicationEndpointAttributesResponse } from './model/ListApplicationEndpointAttributesResponse';
import { ListApplicationEndpointAttributesResponseBodyAttributes } from './model/ListApplicationEndpointAttributesResponseBodyAttributes';
import { ListApplicationEndpointsRequest } from './model/ListApplicationEndpointsRequest';
import { ListApplicationEndpointsResponse } from './model/ListApplicationEndpointsResponse';
import { ListApplicationsRequest } from './model/ListApplicationsRequest';
import { ListApplicationsResponse } from './model/ListApplicationsResponse';
import { ListInstanceRequestBody } from './model/ListInstanceRequestBody';
import { ListMessageTemplateDetailsRequest } from './model/ListMessageTemplateDetailsRequest';
import { ListMessageTemplateDetailsResponse } from './model/ListMessageTemplateDetailsResponse';
import { ListMessageTemplatesRequest } from './model/ListMessageTemplatesRequest';
import { ListMessageTemplatesResponse } from './model/ListMessageTemplatesResponse';
import { ListProjectTagsRequest } from './model/ListProjectTagsRequest';
import { ListProjectTagsResponse } from './model/ListProjectTagsResponse';
import { ListResourceInstancesRequest } from './model/ListResourceInstancesRequest';
import { ListResourceInstancesResponse } from './model/ListResourceInstancesResponse';
import { ListResourceTagsRequest } from './model/ListResourceTagsRequest';
import { ListResourceTagsResponse } from './model/ListResourceTagsResponse';
import { ListSubscriptionsByTopicRequest } from './model/ListSubscriptionsByTopicRequest';
import { ListSubscriptionsByTopicResponse } from './model/ListSubscriptionsByTopicResponse';
import { ListSubscriptionsItem } from './model/ListSubscriptionsItem';
import { ListSubscriptionsRequest } from './model/ListSubscriptionsRequest';
import { ListSubscriptionsResponse } from './model/ListSubscriptionsResponse';
import { ListTopicAttributesRequest } from './model/ListTopicAttributesRequest';
import { ListTopicAttributesResponse } from './model/ListTopicAttributesResponse';
import { ListTopicDetailsRequest } from './model/ListTopicDetailsRequest';
import { ListTopicDetailsResponse } from './model/ListTopicDetailsResponse';
import { ListTopicsItem } from './model/ListTopicsItem';
import { ListTopicsRequest } from './model/ListTopicsRequest';
import { ListTopicsResponse } from './model/ListTopicsResponse';
import { ListVersionRequest } from './model/ListVersionRequest';
import { ListVersionResponse } from './model/ListVersionResponse';
import { ListVersionsRequest } from './model/ListVersionsRequest';
import { ListVersionsResponse } from './model/ListVersionsResponse';
import { MessageTemplate } from './model/MessageTemplate';
import { PublishAppMessageRequest } from './model/PublishAppMessageRequest';
import { PublishAppMessageRequestBody } from './model/PublishAppMessageRequestBody';
import { PublishAppMessageResponse } from './model/PublishAppMessageResponse';
import { PublishMessageRequest } from './model/PublishMessageRequest';
import { PublishMessageRequestBody } from './model/PublishMessageRequestBody';
import { PublishMessageResponse } from './model/PublishMessageResponse';
import { ResourceDetail } from './model/ResourceDetail';
import { ResourceTag } from './model/ResourceTag';
import { ResourceTags } from './model/ResourceTags';
import { Statement } from './model/Statement';
import { TagMatch } from './model/TagMatch';
import { TagResource } from './model/TagResource';
import { TopicAttribute } from './model/TopicAttribute';
import { UpdateApplicationEndpointRequest } from './model/UpdateApplicationEndpointRequest';
import { UpdateApplicationEndpointRequestBody } from './model/UpdateApplicationEndpointRequestBody';
import { UpdateApplicationEndpointResponse } from './model/UpdateApplicationEndpointResponse';
import { UpdateApplicationRequest } from './model/UpdateApplicationRequest';
import { UpdateApplicationRequestBody } from './model/UpdateApplicationRequestBody';
import { UpdateApplicationResponse } from './model/UpdateApplicationResponse';
import { UpdateMessageTemplateRequest } from './model/UpdateMessageTemplateRequest';
import { UpdateMessageTemplateRequestBody } from './model/UpdateMessageTemplateRequestBody';
import { UpdateMessageTemplateResponse } from './model/UpdateMessageTemplateResponse';
import { UpdateTopicAttributeRequest } from './model/UpdateTopicAttributeRequest';
import { UpdateTopicAttributeRequestBody } from './model/UpdateTopicAttributeRequestBody';
import { UpdateTopicAttributeResponse } from './model/UpdateTopicAttributeResponse';
import { UpdateTopicRequest } from './model/UpdateTopicRequest';
import { UpdateTopicRequestBody } from './model/UpdateTopicRequestBody';
import { UpdateTopicResponse } from './model/UpdateTopicResponse';
import { VersionItem } from './model/VersionItem';

export class SmnClient {
    public static newBuilder(): ClientBuilder<SmnClient> {
            return new ClientBuilder<SmnClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 为指定Topic添加一个订阅者，如果订阅者的状态为未确认，则向订阅者发送一个确认的消息。待订阅者进行ConfirmSubscription确认后，该订阅者才能收到Topic发布的消息。单Topic默认可添加10000个订阅者，高并发场景下，可能会出现订阅者数量超过10000仍添加成功的情况，此为正常现象。接口是幂等的，如果添加已存在的订阅者，则返回成功，且status code为200，否则status code为201。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 订阅
     * @param {string} topicUrn Topic的唯一的资源标识，可通过[查询主题列表](https://support.huaweicloud.com/api-smn/smn_api_51004.html)获取该标识。
     * @param {AddSubscriptionRequestBody} [addSubscriptionRequestBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addSubscription(addSubscriptionRequest?: AddSubscriptionRequest): Promise<AddSubscriptionResponse> {
        const options = ParamCreater().addSubscription(addSubscriptionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为指定实例批量添加或删除标签。一个资源上最多有10个标签。
     * 此接口为幂等接口：创建时如果请求体中存在重复key则报错。
     * 创建时，不允许重复key，如果数据库存在就覆盖。
     * 删除时，如果删除的标签不存在，默认处理成功，删除时不对标签字符集范围做校验。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加删除资源标签
     * @param {string} resourceType 资源类型，目前有:  smn_topic，主题  smn_sms，短信  smn_application，移动推送
     * @param {string} resourceId 资源ID。  获取resource_id的方法：  当resource_type为“smn_topic”时， 手动添加请求消息头“X-SMN-RESOURCEID-TYPE&#x3D;name”，资源ID即为topic名称。 不添加请求消息头，通过“查询资源实例”，获取资源ID。 当resource_type为“smn_sms”时，resource_id为签名ID。您可在控制台获取。
     * @param {BatchCreateOrDeleteResourceTagsRequestBody} [batchCreateOrDeleteResourceTagsRequestBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateOrDeleteResourceTags(batchCreateOrDeleteResourceTagsRequest?: BatchCreateOrDeleteResourceTagsRequest): Promise<BatchCreateOrDeleteResourceTagsResponse> {
        const options = ParamCreater().batchCreateOrDeleteResourceTags(batchCreateOrDeleteResourceTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定的订阅者。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 取消订阅
     * @param {string} subscriptionUrn 订阅者的唯一的资源标识，可通过[查询订阅者列表](https://support.huaweicloud.com/api-smn/ListSubscriptions.html)获取该标识。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cancelSubscription(cancelSubscriptionRequest?: CancelSubscriptionRequest): Promise<CancelSubscriptionResponse> {
        const options = ParamCreater().cancelSubscription(cancelSubscriptionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建一个模板，用户可以按照模板去发送消息，这样可以减少请求的数据量。
     * 单用户默认可创建100个消息模板，高并发场景下，可能会出现消息模板数量超过100仍创建成功的情况，此为正常现象。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建消息模板
     * @param {CreateMessageTemplateRequestBody} [createMessageTemplateRequestBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createMessageTemplate(createMessageTemplateRequest?: CreateMessageTemplateRequest): Promise<CreateMessageTemplateResponse> {
        const options = ParamCreater().createMessageTemplate(createMessageTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 一个资源上最多有10个标签。此接口为幂等接口：创建时，如果创建的标签已经存在（key相同），则覆盖。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加资源标签
     * @param {string} resourceType 资源类型，目前有:  smn_topic，主题  smn_sms，短信  smn_application，移动推送
     * @param {string} resourceId 资源ID。  获取resource_id的方法：  当resource_type为“smn_topic”时， 手动添加请求消息头“X-SMN-RESOURCEID-TYPE&#x3D;name”，资源ID即为topic名称。 不添加请求消息头，通过“查询资源实例”，获取资源ID。 当resource_type为“smn_sms”时，resource_id为签名ID。您可在控制台获取。
     * @param {CreateResourceTagRequestBody} [createResourceTagRequestBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createResourceTag(createResourceTagRequest?: CreateResourceTagRequest): Promise<CreateResourceTagResponse> {
        const options = ParamCreater().createResourceTag(createResourceTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建Topic，单用户默认配额为3000。高并发场景下，可能会出现Topic数量超过3000仍创建成功的情况，此为正常现象。
     * 接口是幂等的，接口调用返回成功时，若已存在同名的Topic，返回的status code为200，否则返回的status code为201
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建主题
     * @param {CreateTopicRequestBody} createTopicRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTopic(createTopicRequest?: CreateTopicRequest): Promise<CreateTopicResponse> {
        const options = ParamCreater().createTopic(createTopicRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除消息模板。删除模板之前的消息请求都可以使用该模板发送，删除之后无法再使用该模板发送消息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除消息模板
     * @param {string} messageTemplateId 模板唯一的资源标识，可通过查询[消息模板列表](https://support.huaweicloud.com/api-smn/ListMessageTemplates.html)获取该标识。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteMessageTemplate(deleteMessageTemplateRequest?: DeleteMessageTemplateRequest): Promise<DeleteMessageTemplateResponse> {
        const options = ParamCreater().deleteMessageTemplate(deleteMessageTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 幂等接口：删除时，不对标签做校验。删除的key不存在报404，key不能为空或者空字符串。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除资源标签
     * @param {string} resourceType 资源类型，目前有:  smn_topic，主题。  smn_sms，短信。  smn_application，移动推送。
     * @param {string} resourceId 资源ID。  获取resource_id的方法：  当resource_type为“smn_topic”时， 手动添加请求消息头“X-SMN-RESOURCEID-TYPE&#x3D;name”，资源ID即为topic名称。 不添加请求消息头，通过“查询资源实例”，获取资源ID。 当resource_type为“smn_sms”时，resource_id为签名ID。您可在控制台获取。
     * @param {string} key 待删除标签的key值。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteResourceTag(deleteResourceTagRequest?: DeleteResourceTagRequest): Promise<DeleteResourceTagResponse> {
        const options = ParamCreater().deleteResourceTag(deleteResourceTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除主题。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除主题
     * @param {string} topicUrn Topic的唯一的资源标识，可通过[查询主题列表](https://support.huaweicloud.com/api-smn/smn_api_51004.html)获取该标识。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTopic(deleteTopicRequest?: DeleteTopicRequest): Promise<DeleteTopicResponse> {
        const options = ParamCreater().deleteTopic(deleteTopicRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定名称的主题策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除指定名称的主题策略
     * @param {string} topicUrn Topic的唯一的资源标识，可通过[查询主题列表](https://support.huaweicloud.com/api-smn/smn_api_51004.html)获取该标识。
     * @param {string} name 主题策略名称。 只支持特定的策略名称，请参见[Topic属性表](https://support.huaweicloud.com/intl/zh-cn/api-smn/smn_api_a1000.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTopicAttributeByName(deleteTopicAttributeByNameRequest?: DeleteTopicAttributeByNameRequest): Promise<DeleteTopicAttributeByNameResponse> {
        const options = ParamCreater().deleteTopicAttributeByName(deleteTopicAttributeByNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除所有主题策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除所有主题策略
     * @param {string} topicUrn Topic的唯一的资源标识，可通过[查询主题列表](https://support.huaweicloud.com/api-smn/smn_api_51004.html)获取该标识。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTopicAttributes(deleteTopicAttributesRequest?: DeleteTopicAttributesRequest): Promise<DeleteTopicAttributesResponse> {
        const options = ParamCreater().deleteTopicAttributes(deleteTopicAttributesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询模板详情，包括模板内容。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询消息模板详情
     * @param {string} messageTemplateId 模板唯一的资源标识，可通过查询[消息模板列表](https://support.huaweicloud.com/api-smn/ListMessageTemplates.html)获取该标识。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMessageTemplateDetails(listMessageTemplateDetailsRequest?: ListMessageTemplateDetailsRequest): Promise<ListMessageTemplateDetailsResponse> {
        const options = ParamCreater().listMessageTemplateDetails(listMessageTemplateDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 分页查询模板列表，模板列表按照创建时间进行升序排列。分页查询可以指定offset以及limit。如果不存在模板，则返回空列表。额外的查询参数分别有message_template_name和protocol。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询消息模板列表
     * @param {number} [offset] 偏移量，偏移量为一个大于0小于资源总个数的整数，表示查询该偏移量后面的所有的资源，默认值为0。
     * @param {number} [limit] 取值范围：1~100，取值一般为10，20，50。功能说明：每页返回的资源个数。默认值为100。
     * @param {string} [messageTemplateName] 模板的名称。  只能包含大写字母、小写字母、数字、-和_，且必须由大写字母、小写字母或数字开头，长度在1到64个字符之间。
     * @param {string} [protocol] 模板支持的协议类型。  目前支持的协议包括：  “default”：默认协议。  “email”：邮件传输协议。  “sms”：短信传输协议。  “functionstage”：FunctionGraph（函数）传输协议。  “dms”：DMS传输协议。  “http”、“https”：HTTP/HTTPS传输协议。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMessageTemplates(listMessageTemplatesRequest?: ListMessageTemplatesRequest): Promise<ListMessageTemplatesResponse> {
        const options = ParamCreater().listMessageTemplates(listMessageTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户在指定Region和实例类型的所有标签集合。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目标签
     * @param {string} resourceType 资源类型 目前有: smn_topic，主题 smn_sms，短信 smn_application，移动推送
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProjectTags(listProjectTagsRequest?: ListProjectTagsRequest): Promise<ListProjectTagsResponse> {
        const options = ParamCreater().listProjectTags(listProjectTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 使用标签过滤实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源实例
     * @param {string} resourceType 资源类型，目前有:  smn_topic，主题  smn_sms，短信  smn_application，移动推送
     * @param {ListInstanceRequestBody} [listInstancesRequestBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listResourceInstances(listResourceInstancesRequest?: ListResourceInstancesRequest): Promise<ListResourceInstancesResponse> {
        const options = ParamCreater().listResourceInstances(listResourceInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定实例的标签信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源标签
     * @param {string} resourceType 资源类型 目前有: smn_topic，主题 smn_sms，短信 smn_application，移动推送
     * @param {string} resourceId 资源ID。  获取resource_id的方法：  当resource_type为“smn_topic”时， 手动添加请求消息头“X-SMN-RESOURCEID-TYPE&#x3D;name”，资源ID即为topic名称。 不添加请求消息头，通过“查询资源实例”，获取资源ID。 当resource_type为“smn_sms”时，resource_id为签名ID。您可在控制台获取。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listResourceTags(listResourceTagsRequest?: ListResourceTagsRequest): Promise<ListResourceTagsResponse> {
        const options = ParamCreater().listResourceTags(listResourceTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 分页返回请求者的所有的订阅列表，订阅列表按照订阅创建时间进行升序排列。分页查询可以指定offset以及limit。如果订阅者不存在，返回空列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询订阅者列表
     * @param {number} [offset] 偏移量。  偏移量为一个大于0小于资源总个数的整数，表示查询该偏移量后面的所有的资源，默认值为0。
     * @param {number} [limit]  查询数量限制。  取值范围：1~100，取值一般为10，20，50。功能说明：每页返回的资源个数。默认值为100。
     * @param {string} [protocol] 协议名称， 枚举值：http、https、sms、email、functionstage、dms、application。
     * @param {number} [status] 状态。 0：未确认 1：已确认 2：不需要确认 3：已取消确认 4：已经删除。
     * @param {string} [endpoint] 订阅终端。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSubscriptions(listSubscriptionsRequest?: ListSubscriptionsRequest): Promise<ListSubscriptionsResponse> {
        const options = ParamCreater().listSubscriptions(listSubscriptionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 分页获取特定Topic的订阅列表，订阅列表按照订阅创建时间进行升序排列。分页查询可以指定offset以及limit。如果指定Topic不存在订阅者，返回空列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定Topic的订阅者列表
     * @param {string} topicUrn Topic的唯一的资源标识，可通过[查询主题列表](https://support.huaweicloud.com/api-smn/smn_api_51004.html)获取该标识。
     * @param {number} [offset] 偏移量。  偏移量为一个大于0小于资源总个数的整数，表示查询该偏移量后面的所有的资源，默认值为0。
     * @param {number} [limit] 查询的数量限制。  取值范围：1~100，取值一般为10，20，50。功能说明：每页返回的资源个数。默认值为100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSubscriptionsByTopic(listSubscriptionsByTopicRequest?: ListSubscriptionsByTopicRequest): Promise<ListSubscriptionsByTopicResponse> {
        const options = ParamCreater().listSubscriptionsByTopic(listSubscriptionsByTopicRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询主题的策略信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询主题策略
     * @param {string} topicUrn Topic的唯一的资源标识，可通过[查询主题列表](https://support.huaweicloud.com/api-smn/smn_api_51004.html)获取该标识。
     * @param {string} name 主题策略名称。  只支持特定的策略名称，请参见[Topic属性表](https://support.huaweicloud.com/intl/zh-cn/api-smn/smn_api_a1000.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTopicAttributes(listTopicAttributesRequest?: ListTopicAttributesRequest): Promise<ListTopicAttributesResponse> {
        const options = ParamCreater().listTopicAttributes(listTopicAttributesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Topic的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询主题详情
     * @param {string} topicUrn Topic的唯一的资源标识，可通过[查询主题列表](https://support.huaweicloud.com/api-smn/smn_api_51004.html)获取该标识。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTopicDetails(listTopicDetailsRequest?: ListTopicDetailsRequest): Promise<ListTopicDetailsResponse> {
        const options = ParamCreater().listTopicDetails(listTopicDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 分页查询Topic列表，Topic列表按照Topic创建时间进行降序排列。分页查询可以指定offset以及limit。如果不存在Topic，则返回空列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询主题列表
     * @param {number} [offset] 偏移量。  偏移量为一个大于0小于资源总个数的整数，表示查询该偏移量后面的所有的资源，默认值为0。
     * @param {number} [limit]  查询的数量限制。  取值范围：1~100，取值一般为10，20，50。功能说明：每页返回的资源个数。默认值为100。
     * @param {string} [enterpriseProjectId] 企业项目id，默认企业项目id为0。
     * @param {string} [name] 检索的主题名称，完全匹配。
     * @param {string} [fuzzyName] 检索的主题名称，模糊匹配，按照startwith模式进行匹配。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTopics(listTopicsRequest?: ListTopicsRequest): Promise<ListTopicsResponse> {
        const options = ParamCreater().listTopics(listTopicsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询SMN API V2版本信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询SMN API V2版本信息
     * @param {string} apiVersion 待查询版本号。当前仅支持v2。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVersion(listVersionRequest?: ListVersionRequest): Promise<ListVersionResponse> {
        const options = ParamCreater().listVersion(listVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询SMN开放API支持的版本号。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询SMN支持的API版本号信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVersions(): Promise<ListVersionsResponse> {
        const options = ParamCreater().listVersions();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将消息发送给Topic的所有订阅端点。当返回消息ID时，该消息已被保存并开始尝试将其推送给Topic的订阅者。三种消息发送方式
     * 
     * message
     * 
     * message_structure
     * 
     * message_template_name
     * 
     * 只需要设置其中一个，如果同时设置，生效的优先级为
     * message_structure &gt; message_template_name &gt; message。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 消息发布
     * @param {string} topicUrn Topic的唯一的资源标识，可通过[查询主题列表](https://support.huaweicloud.com/api-smn/smn_api_51004.html)获取该标识。
     * @param {PublishMessageRequestBody} [publishMessageRequestBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public publishMessage(publishMessageRequest?: PublishMessageRequest): Promise<PublishMessageResponse> {
        const options = ParamCreater().publishMessage(publishMessageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改消息模板的内容。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新消息模板
     * @param {string} messageTemplateId 模板唯一的资源标识，可通过查询[消息模板列表](https://support.huaweicloud.com/api-smn/ListMessageTemplates.html)获取该标识。
     * @param {UpdateMessageTemplateRequestBody} [updateMessageTemplateRequestBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateMessageTemplate(updateMessageTemplateRequest?: UpdateMessageTemplateRequest): Promise<UpdateMessageTemplateResponse> {
        const options = ParamCreater().updateMessageTemplate(updateMessageTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新显示名。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新主题
     * @param {string} topicUrn Topic的唯一的资源标识。可以通过[查看主题列表](https://support.huaweicloud.com/api-smn/smn_api_51004.html)获取该标识。
     * @param {UpdateTopicRequestBody} updateTopicRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTopic(updateTopicRequest?: UpdateTopicRequest): Promise<UpdateTopicResponse> {
        const options = ParamCreater().updateTopic(updateTopicRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新主题的策略信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新主题策略
     * @param {string} topicUrn Topic的唯一的资源标识，可通过[查询主题列表](https://support.huaweicloud.com/api-smn/smn_api_51004.html)获取该标识。
     * @param {string} name 主题策略名称。  只支持特定的策略名称，请参见[Topic属性表](https://support.huaweicloud.com/intl/zh-cn/api-smn/smn_api_a1000.html)。
     * @param {UpdateTopicAttributeRequestBody} updateTopicAttributeRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTopicAttribute(updateTopicAttributeRequest?: UpdateTopicAttributeRequest): Promise<UpdateTopicAttributeResponse> {
        const options = ParamCreater().updateTopicAttribute(updateTopicAttributeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建平台应用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建Application
     * @param {CreateApplicationRequestBody} [createApplicationRequestBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createApplication(createApplicationRequest?: CreateApplicationRequest): Promise<CreateApplicationResponse> {
        const options = ParamCreater().createApplication(createApplicationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除平台应用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除Application
     * @param {string} applicationUrn Application的唯一资源标识，可通过[查询Application](https://support.huaweicloud.com/api-smn/ListApplications.html)获取该标识。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteApplication(deleteApplicationRequest?: DeleteApplicationRequest): Promise<DeleteApplicationResponse> {
        const options = ParamCreater().deleteApplication(deleteApplicationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取应用平台属性。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Application属性
     * @param {string} applicationUrn Application的唯一资源标识，可通过[查询Application](https://support.huaweicloud.com/api-smn/ListApplications.html)获取该标识。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApplicationAttributes(listApplicationAttributesRequest?: ListApplicationAttributesRequest): Promise<ListApplicationAttributesResponse> {
        const options = ParamCreater().listApplicationAttributes(listApplicationAttributesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询应用平台列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Application
     * @param {number} [offset] 偏移量。  偏移量为一个大于0小于资源总个数的整数，表示查询该偏移量后面的所有的资源，默认值为0。
     * @param {number} [limit] 查询的数量限制。  取值范围：1~100，取值一般为10，20，50。功能说明：每页返回的资源个数。默认值为100。
     * @param {string} [name] 检索应用名称。  支持后向模糊匹配，长度不得超过64个字符，只能包含英文字母、下划线和数字。
     * @param {string} [platform] 应用平台。  目前仅支持HMS、APNS、APNS_SANDBOX。  HMS是为开发者提供的消息推送平台。  APNS和APNS_SANDBOX是用于推送iOS消息的服务平台。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApplications(listApplicationsRequest?: ListApplicationsRequest): Promise<ListApplicationsResponse> {
        const options = ParamCreater().listApplications(listApplicationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将消息直发给endpoint设备。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary App消息发布
     * @param {string} endpointUrn Endpoint的唯一资源标识，可通过[查询Application的Endpoint列表](https://support.huaweicloud.com/api-smn/ListApplicationEndpoints.html)获取该标识
     * @param {PublishAppMessageRequestBody} [publishAppMessageRequestBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public publishAppMessage(publishAppMessageRequest?: PublishAppMessageRequest): Promise<PublishAppMessageResponse> {
        const options = ParamCreater().publishAppMessage(publishAppMessageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新应用平台。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新Application
     * @param {string} applicationUrn Application的唯一资源标识，可通过[查询Application](https://support.huaweicloud.com/api-smn/ListApplications.html)获取该标识。
     * @param {UpdateApplicationRequestBody} [updateApplicationRequestBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateApplication(updateApplicationRequest?: UpdateApplicationRequest): Promise<UpdateApplicationResponse> {
        const options = ParamCreater().updateApplication(updateApplicationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建应用平台的endpoint终端。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建Application endpoint
     * @param {string} applicationUrn Application的唯一资源标识，可通过[查询Application](https://support.huaweicloud.com/api-smn/ListApplications.html)获取该标识。
     * @param {CreateApplicationEndpointRequestBody} [createApplicationEndpointRequestBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createApplicationEndpoint(createApplicationEndpointRequest?: CreateApplicationEndpointRequest): Promise<CreateApplicationEndpointResponse> {
        const options = ParamCreater().createApplicationEndpoint(createApplicationEndpointRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除设备。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除Application endpoint
     * @param {string} endpointUrn Endpoint的唯一资源标识，可通过[查询Application的Endpoint列表](https://support.huaweicloud.com/api-smn/ListApplicationEndpoints.html)获取该标识。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteApplicationEndpoint(deleteApplicationEndpointRequest?: DeleteApplicationEndpointRequest): Promise<DeleteApplicationEndpointResponse> {
        const options = ParamCreater().deleteApplicationEndpoint(deleteApplicationEndpointRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取endpoint的属性。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Application的Endpoint属性
     * @param {string} endpointUrn Endpoint的唯一资源标识，可通过[查询Application的Endpoint列表](https://support.huaweicloud.com/api-smn/ListApplicationEndpoints.html)获取该标识。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApplicationEndpointAttributes(listApplicationEndpointAttributesRequest?: ListApplicationEndpointAttributesRequest): Promise<ListApplicationEndpointAttributesResponse> {
        const options = ParamCreater().listApplicationEndpointAttributes(listApplicationEndpointAttributesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询平台的endpoint列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Application的Endpoint列表
     * @param {string} applicationUrn Application的唯一资源标识，可通过[查询Application](https://support.huaweicloud.com/api-smn/ListApplications.html)获取该标识。
     * @param {number} [offset] 偏移量。  偏移量为一个大于0小于资源总个数的整数，表示查询该偏移量后面的所有的资源，默认值为0。
     * @param {number} [limit] 查询的数量限制。  取值范围：1~100，取值一般为10，20，50。功能说明：每页返回的资源个数。默认值为100。
     * @param {string} [enabled] 设备是否可用，值为true或false字符串。
     * @param {string} [token] 设备token，最大长度512个字节。
     * @param {string} [userData] 用户数据，最大长度2048个字节。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApplicationEndpoints(listApplicationEndpointsRequest?: ListApplicationEndpointsRequest): Promise<ListApplicationEndpointsResponse> {
        const options = ParamCreater().listApplicationEndpoints(listApplicationEndpointsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新设备属性。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新Application endpoint
     * @param {string} endpointUrn Endpoint的唯一资源标识，可通过[查询Application的Endpoint列表](https://support.huaweicloud.com/api-smn/ListApplicationEndpoints.html)获取该标识。
     * @param {UpdateApplicationEndpointRequestBody} [updateApplicationEndpointRequestBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateApplicationEndpoint(updateApplicationEndpointRequest?: UpdateApplicationEndpointRequest): Promise<UpdateApplicationEndpointResponse> {
        const options = ParamCreater().updateApplicationEndpoint(updateApplicationEndpointRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 为指定Topic添加一个订阅者，如果订阅者的状态为未确认，则向订阅者发送一个确认的消息。待订阅者进行ConfirmSubscription确认后，该订阅者才能收到Topic发布的消息。单Topic默认可添加10000个订阅者，高并发场景下，可能会出现订阅者数量超过10000仍添加成功的情况，此为正常现象。接口是幂等的，如果添加已存在的订阅者，则返回成功，且status code为200，否则status code为201。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addSubscription(addSubscriptionRequest?: AddSubscriptionRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/notifications/topics/{topic_urn}/subscriptions",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let topicUrn;

            if (addSubscriptionRequest !== null && addSubscriptionRequest !== undefined) {
                if (addSubscriptionRequest instanceof AddSubscriptionRequest) {
                    topicUrn = addSubscriptionRequest.topicUrn;
                    body = addSubscriptionRequest.body
                } else {
                    topicUrn = addSubscriptionRequest['topic_urn'];
                    body = addSubscriptionRequest['body'];
                }
            }

        
            if (topicUrn === null || topicUrn === undefined) {
            throw new RequiredError('topicUrn','Required parameter topicUrn was null or undefined when calling addSubscription.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'topic_urn': topicUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 为指定实例批量添加或删除标签。一个资源上最多有10个标签。
         * 此接口为幂等接口：创建时如果请求体中存在重复key则报错。
         * 创建时，不允许重复key，如果数据库存在就覆盖。
         * 删除时，如果删除的标签不存在，默认处理成功，删除时不对标签字符集范围做校验。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateOrDeleteResourceTags(batchCreateOrDeleteResourceTagsRequest?: BatchCreateOrDeleteResourceTagsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/{resource_type}/{resource_id}/tags/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let resourceType;
            
            let resourceId;

            if (batchCreateOrDeleteResourceTagsRequest !== null && batchCreateOrDeleteResourceTagsRequest !== undefined) {
                if (batchCreateOrDeleteResourceTagsRequest instanceof BatchCreateOrDeleteResourceTagsRequest) {
                    resourceType = batchCreateOrDeleteResourceTagsRequest.resourceType;
                    resourceId = batchCreateOrDeleteResourceTagsRequest.resourceId;
                    body = batchCreateOrDeleteResourceTagsRequest.body
                } else {
                    resourceType = batchCreateOrDeleteResourceTagsRequest['resource_type'];
                    resourceId = batchCreateOrDeleteResourceTagsRequest['resource_id'];
                    body = batchCreateOrDeleteResourceTagsRequest['body'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling batchCreateOrDeleteResourceTags.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling batchCreateOrDeleteResourceTags.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定的订阅者。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        cancelSubscription(cancelSubscriptionRequest?: CancelSubscriptionRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/notifications/subscriptions/{subscription_urn}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let subscriptionUrn;

            if (cancelSubscriptionRequest !== null && cancelSubscriptionRequest !== undefined) {
                if (cancelSubscriptionRequest instanceof CancelSubscriptionRequest) {
                    subscriptionUrn = cancelSubscriptionRequest.subscriptionUrn;
                } else {
                    subscriptionUrn = cancelSubscriptionRequest['subscription_urn'];
                }
            }

        
            if (subscriptionUrn === null || subscriptionUrn === undefined) {
            throw new RequiredError('subscriptionUrn','Required parameter subscriptionUrn was null or undefined when calling cancelSubscription.');
            }

            options.pathParams = { 'subscription_urn': subscriptionUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建一个模板，用户可以按照模板去发送消息，这样可以减少请求的数据量。
         * 单用户默认可创建100个消息模板，高并发场景下，可能会出现消息模板数量超过100仍创建成功的情况，此为正常现象。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createMessageTemplate(createMessageTemplateRequest?: CreateMessageTemplateRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/notifications/message_template",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createMessageTemplateRequest !== null && createMessageTemplateRequest !== undefined) {
                if (createMessageTemplateRequest instanceof CreateMessageTemplateRequest) {
                    body = createMessageTemplateRequest.body
                } else {
                    body = createMessageTemplateRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 一个资源上最多有10个标签。此接口为幂等接口：创建时，如果创建的标签已经存在（key相同），则覆盖。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createResourceTag(createResourceTagRequest?: CreateResourceTagRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/{resource_type}/{resource_id}/tags",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let resourceType;
            
            let resourceId;

            if (createResourceTagRequest !== null && createResourceTagRequest !== undefined) {
                if (createResourceTagRequest instanceof CreateResourceTagRequest) {
                    resourceType = createResourceTagRequest.resourceType;
                    resourceId = createResourceTagRequest.resourceId;
                    body = createResourceTagRequest.body
                } else {
                    resourceType = createResourceTagRequest['resource_type'];
                    resourceId = createResourceTagRequest['resource_id'];
                    body = createResourceTagRequest['body'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling createResourceTag.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling createResourceTag.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建Topic，单用户默认配额为3000。高并发场景下，可能会出现Topic数量超过3000仍创建成功的情况，此为正常现象。
         * 接口是幂等的，接口调用返回成功时，若已存在同名的Topic，返回的status code为200，否则返回的status code为201
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTopic(createTopicRequest?: CreateTopicRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/notifications/topics",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createTopicRequest !== null && createTopicRequest !== undefined) {
                if (createTopicRequest instanceof CreateTopicRequest) {
                    body = createTopicRequest.body
                } else {
                    body = createTopicRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除消息模板。删除模板之前的消息请求都可以使用该模板发送，删除之后无法再使用该模板发送消息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteMessageTemplate(deleteMessageTemplateRequest?: DeleteMessageTemplateRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/notifications/message_template/{message_template_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let messageTemplateId;

            if (deleteMessageTemplateRequest !== null && deleteMessageTemplateRequest !== undefined) {
                if (deleteMessageTemplateRequest instanceof DeleteMessageTemplateRequest) {
                    messageTemplateId = deleteMessageTemplateRequest.messageTemplateId;
                } else {
                    messageTemplateId = deleteMessageTemplateRequest['message_template_id'];
                }
            }

        
            if (messageTemplateId === null || messageTemplateId === undefined) {
            throw new RequiredError('messageTemplateId','Required parameter messageTemplateId was null or undefined when calling deleteMessageTemplate.');
            }

            options.pathParams = { 'message_template_id': messageTemplateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 幂等接口：删除时，不对标签做校验。删除的key不存在报404，key不能为空或者空字符串。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteResourceTag(deleteResourceTagRequest?: DeleteResourceTagRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/{resource_type}/{resource_id}/tags/{key}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceType;
            
            let resourceId;
            
            let key;

            if (deleteResourceTagRequest !== null && deleteResourceTagRequest !== undefined) {
                if (deleteResourceTagRequest instanceof DeleteResourceTagRequest) {
                    resourceType = deleteResourceTagRequest.resourceType;
                    resourceId = deleteResourceTagRequest.resourceId;
                    key = deleteResourceTagRequest.key;
                } else {
                    resourceType = deleteResourceTagRequest['resource_type'];
                    resourceId = deleteResourceTagRequest['resource_id'];
                    key = deleteResourceTagRequest['key'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling deleteResourceTag.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling deleteResourceTag.');
            }
            if (key === null || key === undefined) {
            throw new RequiredError('key','Required parameter key was null or undefined when calling deleteResourceTag.');
            }

            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId,'key': key, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除主题。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTopic(deleteTopicRequest?: DeleteTopicRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/notifications/topics/{topic_urn}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let topicUrn;

            if (deleteTopicRequest !== null && deleteTopicRequest !== undefined) {
                if (deleteTopicRequest instanceof DeleteTopicRequest) {
                    topicUrn = deleteTopicRequest.topicUrn;
                } else {
                    topicUrn = deleteTopicRequest['topic_urn'];
                }
            }

        
            if (topicUrn === null || topicUrn === undefined) {
            throw new RequiredError('topicUrn','Required parameter topicUrn was null or undefined when calling deleteTopic.');
            }

            options.pathParams = { 'topic_urn': topicUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定名称的主题策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTopicAttributeByName(deleteTopicAttributeByNameRequest?: DeleteTopicAttributeByNameRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/notifications/topics/{topic_urn}/attributes/{name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let topicUrn;
            
            let name;

            if (deleteTopicAttributeByNameRequest !== null && deleteTopicAttributeByNameRequest !== undefined) {
                if (deleteTopicAttributeByNameRequest instanceof DeleteTopicAttributeByNameRequest) {
                    topicUrn = deleteTopicAttributeByNameRequest.topicUrn;
                    name = deleteTopicAttributeByNameRequest.name;
                } else {
                    topicUrn = deleteTopicAttributeByNameRequest['topic_urn'];
                    name = deleteTopicAttributeByNameRequest['name'];
                }
            }

        
            if (topicUrn === null || topicUrn === undefined) {
            throw new RequiredError('topicUrn','Required parameter topicUrn was null or undefined when calling deleteTopicAttributeByName.');
            }
            if (name === null || name === undefined) {
            throw new RequiredError('name','Required parameter name was null or undefined when calling deleteTopicAttributeByName.');
            }

            options.pathParams = { 'topic_urn': topicUrn,'name': name, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除所有主题策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTopicAttributes(deleteTopicAttributesRequest?: DeleteTopicAttributesRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/notifications/topics/{topic_urn}/attributes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let topicUrn;

            if (deleteTopicAttributesRequest !== null && deleteTopicAttributesRequest !== undefined) {
                if (deleteTopicAttributesRequest instanceof DeleteTopicAttributesRequest) {
                    topicUrn = deleteTopicAttributesRequest.topicUrn;
                } else {
                    topicUrn = deleteTopicAttributesRequest['topic_urn'];
                }
            }

        
            if (topicUrn === null || topicUrn === undefined) {
            throw new RequiredError('topicUrn','Required parameter topicUrn was null or undefined when calling deleteTopicAttributes.');
            }

            options.pathParams = { 'topic_urn': topicUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询模板详情，包括模板内容。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMessageTemplateDetails(listMessageTemplateDetailsRequest?: ListMessageTemplateDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/notifications/message_template/{message_template_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let messageTemplateId;

            if (listMessageTemplateDetailsRequest !== null && listMessageTemplateDetailsRequest !== undefined) {
                if (listMessageTemplateDetailsRequest instanceof ListMessageTemplateDetailsRequest) {
                    messageTemplateId = listMessageTemplateDetailsRequest.messageTemplateId;
                } else {
                    messageTemplateId = listMessageTemplateDetailsRequest['message_template_id'];
                }
            }

        
            if (messageTemplateId === null || messageTemplateId === undefined) {
            throw new RequiredError('messageTemplateId','Required parameter messageTemplateId was null or undefined when calling listMessageTemplateDetails.');
            }

            options.pathParams = { 'message_template_id': messageTemplateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 分页查询模板列表，模板列表按照创建时间进行升序排列。分页查询可以指定offset以及limit。如果不存在模板，则返回空列表。额外的查询参数分别有message_template_name和protocol。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMessageTemplates(listMessageTemplatesRequest?: ListMessageTemplatesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/notifications/message_template",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let messageTemplateName;
            
            let protocol;

            if (listMessageTemplatesRequest !== null && listMessageTemplatesRequest !== undefined) {
                if (listMessageTemplatesRequest instanceof ListMessageTemplatesRequest) {
                    offset = listMessageTemplatesRequest.offset;
                    limit = listMessageTemplatesRequest.limit;
                    messageTemplateName = listMessageTemplatesRequest.messageTemplateName;
                    protocol = listMessageTemplatesRequest.protocol;
                } else {
                    offset = listMessageTemplatesRequest['offset'];
                    limit = listMessageTemplatesRequest['limit'];
                    messageTemplateName = listMessageTemplatesRequest['message_template_name'];
                    protocol = listMessageTemplatesRequest['protocol'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (messageTemplateName !== null && messageTemplateName !== undefined) {
                localVarQueryParameter['message_template_name'] = messageTemplateName;
            }
            if (protocol !== null && protocol !== undefined) {
                localVarQueryParameter['protocol'] = protocol;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户在指定Region和实例类型的所有标签集合。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProjectTags(listProjectTagsRequest?: ListProjectTagsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/{resource_type}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceType;

            if (listProjectTagsRequest !== null && listProjectTagsRequest !== undefined) {
                if (listProjectTagsRequest instanceof ListProjectTagsRequest) {
                    resourceType = listProjectTagsRequest.resourceType;
                } else {
                    resourceType = listProjectTagsRequest['resource_type'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling listProjectTags.');
            }

            options.pathParams = { 'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 使用标签过滤实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listResourceInstances(listResourceInstancesRequest?: ListResourceInstancesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/{resource_type}/resource_instances/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let resourceType;

            if (listResourceInstancesRequest !== null && listResourceInstancesRequest !== undefined) {
                if (listResourceInstancesRequest instanceof ListResourceInstancesRequest) {
                    resourceType = listResourceInstancesRequest.resourceType;
                    body = listResourceInstancesRequest.body
                } else {
                    resourceType = listResourceInstancesRequest['resource_type'];
                    body = listResourceInstancesRequest['body'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling listResourceInstances.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定实例的标签信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listResourceTags(listResourceTagsRequest?: ListResourceTagsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/{resource_type}/{resource_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceType;
            
            let resourceId;

            if (listResourceTagsRequest !== null && listResourceTagsRequest !== undefined) {
                if (listResourceTagsRequest instanceof ListResourceTagsRequest) {
                    resourceType = listResourceTagsRequest.resourceType;
                    resourceId = listResourceTagsRequest.resourceId;
                } else {
                    resourceType = listResourceTagsRequest['resource_type'];
                    resourceId = listResourceTagsRequest['resource_id'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling listResourceTags.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling listResourceTags.');
            }

            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 分页返回请求者的所有的订阅列表，订阅列表按照订阅创建时间进行升序排列。分页查询可以指定offset以及limit。如果订阅者不存在，返回空列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSubscriptions(listSubscriptionsRequest?: ListSubscriptionsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/notifications/subscriptions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let protocol;
            
            let status;
            
            let endpoint;

            if (listSubscriptionsRequest !== null && listSubscriptionsRequest !== undefined) {
                if (listSubscriptionsRequest instanceof ListSubscriptionsRequest) {
                    offset = listSubscriptionsRequest.offset;
                    limit = listSubscriptionsRequest.limit;
                    protocol = listSubscriptionsRequest.protocol;
                    status = listSubscriptionsRequest.status;
                    endpoint = listSubscriptionsRequest.endpoint;
                } else {
                    offset = listSubscriptionsRequest['offset'];
                    limit = listSubscriptionsRequest['limit'];
                    protocol = listSubscriptionsRequest['protocol'];
                    status = listSubscriptionsRequest['status'];
                    endpoint = listSubscriptionsRequest['endpoint'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (protocol !== null && protocol !== undefined) {
                localVarQueryParameter['protocol'] = protocol;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (endpoint !== null && endpoint !== undefined) {
                localVarQueryParameter['endpoint'] = endpoint;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 分页获取特定Topic的订阅列表，订阅列表按照订阅创建时间进行升序排列。分页查询可以指定offset以及limit。如果指定Topic不存在订阅者，返回空列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSubscriptionsByTopic(listSubscriptionsByTopicRequest?: ListSubscriptionsByTopicRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/notifications/topics/{topic_urn}/subscriptions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let topicUrn;
            
            let offset;
            
            let limit;

            if (listSubscriptionsByTopicRequest !== null && listSubscriptionsByTopicRequest !== undefined) {
                if (listSubscriptionsByTopicRequest instanceof ListSubscriptionsByTopicRequest) {
                    topicUrn = listSubscriptionsByTopicRequest.topicUrn;
                    offset = listSubscriptionsByTopicRequest.offset;
                    limit = listSubscriptionsByTopicRequest.limit;
                } else {
                    topicUrn = listSubscriptionsByTopicRequest['topic_urn'];
                    offset = listSubscriptionsByTopicRequest['offset'];
                    limit = listSubscriptionsByTopicRequest['limit'];
                }
            }

        
            if (topicUrn === null || topicUrn === undefined) {
            throw new RequiredError('topicUrn','Required parameter topicUrn was null or undefined when calling listSubscriptionsByTopic.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'topic_urn': topicUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询主题的策略信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTopicAttributes(listTopicAttributesRequest?: ListTopicAttributesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/notifications/topics/{topic_urn}/attributes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let topicUrn;
            
            let name;

            if (listTopicAttributesRequest !== null && listTopicAttributesRequest !== undefined) {
                if (listTopicAttributesRequest instanceof ListTopicAttributesRequest) {
                    topicUrn = listTopicAttributesRequest.topicUrn;
                    name = listTopicAttributesRequest.name;
                } else {
                    topicUrn = listTopicAttributesRequest['topic_urn'];
                    name = listTopicAttributesRequest['name'];
                }
            }

        
            if (topicUrn === null || topicUrn === undefined) {
            throw new RequiredError('topicUrn','Required parameter topicUrn was null or undefined when calling listTopicAttributes.');
            }
            if (name === null || name === undefined) {
                throw new RequiredError('name','Required parameter name was null or undefined when calling listTopicAttributes.');
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'topic_urn': topicUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Topic的详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTopicDetails(listTopicDetailsRequest?: ListTopicDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/notifications/topics/{topic_urn}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let topicUrn;

            if (listTopicDetailsRequest !== null && listTopicDetailsRequest !== undefined) {
                if (listTopicDetailsRequest instanceof ListTopicDetailsRequest) {
                    topicUrn = listTopicDetailsRequest.topicUrn;
                } else {
                    topicUrn = listTopicDetailsRequest['topic_urn'];
                }
            }

        
            if (topicUrn === null || topicUrn === undefined) {
            throw new RequiredError('topicUrn','Required parameter topicUrn was null or undefined when calling listTopicDetails.');
            }

            options.pathParams = { 'topic_urn': topicUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 分页查询Topic列表，Topic列表按照Topic创建时间进行降序排列。分页查询可以指定offset以及limit。如果不存在Topic，则返回空列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTopics(listTopicsRequest?: ListTopicsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/notifications/topics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let enterpriseProjectId;
            
            let name;
            
            let fuzzyName;

            if (listTopicsRequest !== null && listTopicsRequest !== undefined) {
                if (listTopicsRequest instanceof ListTopicsRequest) {
                    offset = listTopicsRequest.offset;
                    limit = listTopicsRequest.limit;
                    enterpriseProjectId = listTopicsRequest.enterpriseProjectId;
                    name = listTopicsRequest.name;
                    fuzzyName = listTopicsRequest.fuzzyName;
                } else {
                    offset = listTopicsRequest['offset'];
                    limit = listTopicsRequest['limit'];
                    enterpriseProjectId = listTopicsRequest['enterprise_project_id'];
                    name = listTopicsRequest['name'];
                    fuzzyName = listTopicsRequest['fuzzy_name'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (fuzzyName !== null && fuzzyName !== undefined) {
                localVarQueryParameter['fuzzy_name'] = fuzzyName;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询SMN API V2版本信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVersion(listVersionRequest?: ListVersionRequest) {
            const options = {
                method: "GET",
                url: "/{api_version}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let apiVersion;

            if (listVersionRequest !== null && listVersionRequest !== undefined) {
                if (listVersionRequest instanceof ListVersionRequest) {
                    apiVersion = listVersionRequest.apiVersion;
                } else {
                    apiVersion = listVersionRequest['api_version'];
                }
            }

        
            if (apiVersion === null || apiVersion === undefined) {
            throw new RequiredError('apiVersion','Required parameter apiVersion was null or undefined when calling listVersion.');
            }

            options.pathParams = { 'api_version': apiVersion, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询SMN开放API支持的版本号。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVersions() {
            const options = {
                method: "GET",
                url: "/",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 将消息发送给Topic的所有订阅端点。当返回消息ID时，该消息已被保存并开始尝试将其推送给Topic的订阅者。三种消息发送方式
         * 
         * message
         * 
         * message_structure
         * 
         * message_template_name
         * 
         * 只需要设置其中一个，如果同时设置，生效的优先级为
         * message_structure &gt; message_template_name &gt; message。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        publishMessage(publishMessageRequest?: PublishMessageRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/notifications/topics/{topic_urn}/publish",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let topicUrn;

            if (publishMessageRequest !== null && publishMessageRequest !== undefined) {
                if (publishMessageRequest instanceof PublishMessageRequest) {
                    topicUrn = publishMessageRequest.topicUrn;
                    body = publishMessageRequest.body
                } else {
                    topicUrn = publishMessageRequest['topic_urn'];
                    body = publishMessageRequest['body'];
                }
            }

        
            if (topicUrn === null || topicUrn === undefined) {
            throw new RequiredError('topicUrn','Required parameter topicUrn was null or undefined when calling publishMessage.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'topic_urn': topicUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改消息模板的内容。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateMessageTemplate(updateMessageTemplateRequest?: UpdateMessageTemplateRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/notifications/message_template/{message_template_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let messageTemplateId;

            if (updateMessageTemplateRequest !== null && updateMessageTemplateRequest !== undefined) {
                if (updateMessageTemplateRequest instanceof UpdateMessageTemplateRequest) {
                    messageTemplateId = updateMessageTemplateRequest.messageTemplateId;
                    body = updateMessageTemplateRequest.body
                } else {
                    messageTemplateId = updateMessageTemplateRequest['message_template_id'];
                    body = updateMessageTemplateRequest['body'];
                }
            }

        
            if (messageTemplateId === null || messageTemplateId === undefined) {
            throw new RequiredError('messageTemplateId','Required parameter messageTemplateId was null or undefined when calling updateMessageTemplate.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'message_template_id': messageTemplateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新显示名。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTopic(updateTopicRequest?: UpdateTopicRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/notifications/topics/{topic_urn}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let topicUrn;

            if (updateTopicRequest !== null && updateTopicRequest !== undefined) {
                if (updateTopicRequest instanceof UpdateTopicRequest) {
                    topicUrn = updateTopicRequest.topicUrn;
                    body = updateTopicRequest.body
                } else {
                    topicUrn = updateTopicRequest['topic_urn'];
                    body = updateTopicRequest['body'];
                }
            }

        
            if (topicUrn === null || topicUrn === undefined) {
            throw new RequiredError('topicUrn','Required parameter topicUrn was null or undefined when calling updateTopic.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'topic_urn': topicUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新主题的策略信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTopicAttribute(updateTopicAttributeRequest?: UpdateTopicAttributeRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/notifications/topics/{topic_urn}/attributes/{name}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let topicUrn;
            
            let name;

            if (updateTopicAttributeRequest !== null && updateTopicAttributeRequest !== undefined) {
                if (updateTopicAttributeRequest instanceof UpdateTopicAttributeRequest) {
                    topicUrn = updateTopicAttributeRequest.topicUrn;
                    name = updateTopicAttributeRequest.name;
                    body = updateTopicAttributeRequest.body
                } else {
                    topicUrn = updateTopicAttributeRequest['topic_urn'];
                    name = updateTopicAttributeRequest['name'];
                    body = updateTopicAttributeRequest['body'];
                }
            }

        
            if (topicUrn === null || topicUrn === undefined) {
            throw new RequiredError('topicUrn','Required parameter topicUrn was null or undefined when calling updateTopicAttribute.');
            }
            if (name === null || name === undefined) {
            throw new RequiredError('name','Required parameter name was null or undefined when calling updateTopicAttribute.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'topic_urn': topicUrn,'name': name, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建平台应用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createApplication(createApplicationRequest?: CreateApplicationRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/notifications/applications",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createApplicationRequest !== null && createApplicationRequest !== undefined) {
                if (createApplicationRequest instanceof CreateApplicationRequest) {
                    body = createApplicationRequest.body
                } else {
                    body = createApplicationRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除平台应用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteApplication(deleteApplicationRequest?: DeleteApplicationRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/notifications/applications/{application_urn}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let applicationUrn;

            if (deleteApplicationRequest !== null && deleteApplicationRequest !== undefined) {
                if (deleteApplicationRequest instanceof DeleteApplicationRequest) {
                    applicationUrn = deleteApplicationRequest.applicationUrn;
                } else {
                    applicationUrn = deleteApplicationRequest['application_urn'];
                }
            }

        
            if (applicationUrn === null || applicationUrn === undefined) {
            throw new RequiredError('applicationUrn','Required parameter applicationUrn was null or undefined when calling deleteApplication.');
            }

            options.pathParams = { 'application_urn': applicationUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取应用平台属性。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApplicationAttributes(listApplicationAttributesRequest?: ListApplicationAttributesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/notifications/applications/{application_urn}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let applicationUrn;

            if (listApplicationAttributesRequest !== null && listApplicationAttributesRequest !== undefined) {
                if (listApplicationAttributesRequest instanceof ListApplicationAttributesRequest) {
                    applicationUrn = listApplicationAttributesRequest.applicationUrn;
                } else {
                    applicationUrn = listApplicationAttributesRequest['application_urn'];
                }
            }

        
            if (applicationUrn === null || applicationUrn === undefined) {
            throw new RequiredError('applicationUrn','Required parameter applicationUrn was null or undefined when calling listApplicationAttributes.');
            }

            options.pathParams = { 'application_urn': applicationUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询应用平台列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApplications(listApplicationsRequest?: ListApplicationsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/notifications/applications",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let name;
            
            let platform;

            if (listApplicationsRequest !== null && listApplicationsRequest !== undefined) {
                if (listApplicationsRequest instanceof ListApplicationsRequest) {
                    offset = listApplicationsRequest.offset;
                    limit = listApplicationsRequest.limit;
                    name = listApplicationsRequest.name;
                    platform = listApplicationsRequest.platform;
                } else {
                    offset = listApplicationsRequest['offset'];
                    limit = listApplicationsRequest['limit'];
                    name = listApplicationsRequest['name'];
                    platform = listApplicationsRequest['platform'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (platform !== null && platform !== undefined) {
                localVarQueryParameter['platform'] = platform;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 将消息直发给endpoint设备。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        publishAppMessage(publishAppMessageRequest?: PublishAppMessageRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/notifications/endpoints/{endpoint_urn}/publish",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let endpointUrn;

            if (publishAppMessageRequest !== null && publishAppMessageRequest !== undefined) {
                if (publishAppMessageRequest instanceof PublishAppMessageRequest) {
                    endpointUrn = publishAppMessageRequest.endpointUrn;
                    body = publishAppMessageRequest.body
                } else {
                    endpointUrn = publishAppMessageRequest['endpoint_urn'];
                    body = publishAppMessageRequest['body'];
                }
            }

        
            if (endpointUrn === null || endpointUrn === undefined) {
            throw new RequiredError('endpointUrn','Required parameter endpointUrn was null or undefined when calling publishAppMessage.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'endpoint_urn': endpointUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新应用平台。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateApplication(updateApplicationRequest?: UpdateApplicationRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/notifications/applications/{application_urn}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let applicationUrn;

            if (updateApplicationRequest !== null && updateApplicationRequest !== undefined) {
                if (updateApplicationRequest instanceof UpdateApplicationRequest) {
                    applicationUrn = updateApplicationRequest.applicationUrn;
                    body = updateApplicationRequest.body
                } else {
                    applicationUrn = updateApplicationRequest['application_urn'];
                    body = updateApplicationRequest['body'];
                }
            }

        
            if (applicationUrn === null || applicationUrn === undefined) {
            throw new RequiredError('applicationUrn','Required parameter applicationUrn was null or undefined when calling updateApplication.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'application_urn': applicationUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建应用平台的endpoint终端。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createApplicationEndpoint(createApplicationEndpointRequest?: CreateApplicationEndpointRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/notifications/applications/{application_urn}/endpoints",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let applicationUrn;

            if (createApplicationEndpointRequest !== null && createApplicationEndpointRequest !== undefined) {
                if (createApplicationEndpointRequest instanceof CreateApplicationEndpointRequest) {
                    applicationUrn = createApplicationEndpointRequest.applicationUrn;
                    body = createApplicationEndpointRequest.body
                } else {
                    applicationUrn = createApplicationEndpointRequest['application_urn'];
                    body = createApplicationEndpointRequest['body'];
                }
            }

        
            if (applicationUrn === null || applicationUrn === undefined) {
            throw new RequiredError('applicationUrn','Required parameter applicationUrn was null or undefined when calling createApplicationEndpoint.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'application_urn': applicationUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除设备。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteApplicationEndpoint(deleteApplicationEndpointRequest?: DeleteApplicationEndpointRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/notifications/endpoints/{endpoint_urn}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let endpointUrn;

            if (deleteApplicationEndpointRequest !== null && deleteApplicationEndpointRequest !== undefined) {
                if (deleteApplicationEndpointRequest instanceof DeleteApplicationEndpointRequest) {
                    endpointUrn = deleteApplicationEndpointRequest.endpointUrn;
                } else {
                    endpointUrn = deleteApplicationEndpointRequest['endpoint_urn'];
                }
            }

        
            if (endpointUrn === null || endpointUrn === undefined) {
            throw new RequiredError('endpointUrn','Required parameter endpointUrn was null or undefined when calling deleteApplicationEndpoint.');
            }

            options.pathParams = { 'endpoint_urn': endpointUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取endpoint的属性。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApplicationEndpointAttributes(listApplicationEndpointAttributesRequest?: ListApplicationEndpointAttributesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/notifications/endpoints/{endpoint_urn}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let endpointUrn;

            if (listApplicationEndpointAttributesRequest !== null && listApplicationEndpointAttributesRequest !== undefined) {
                if (listApplicationEndpointAttributesRequest instanceof ListApplicationEndpointAttributesRequest) {
                    endpointUrn = listApplicationEndpointAttributesRequest.endpointUrn;
                } else {
                    endpointUrn = listApplicationEndpointAttributesRequest['endpoint_urn'];
                }
            }

        
            if (endpointUrn === null || endpointUrn === undefined) {
            throw new RequiredError('endpointUrn','Required parameter endpointUrn was null or undefined when calling listApplicationEndpointAttributes.');
            }

            options.pathParams = { 'endpoint_urn': endpointUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询平台的endpoint列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApplicationEndpoints(listApplicationEndpointsRequest?: ListApplicationEndpointsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/notifications/applications/{application_urn}/endpoints",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let applicationUrn;
            
            let offset;
            
            let limit;
            
            let enabled;
            
            let token;
            
            let userData;

            if (listApplicationEndpointsRequest !== null && listApplicationEndpointsRequest !== undefined) {
                if (listApplicationEndpointsRequest instanceof ListApplicationEndpointsRequest) {
                    applicationUrn = listApplicationEndpointsRequest.applicationUrn;
                    offset = listApplicationEndpointsRequest.offset;
                    limit = listApplicationEndpointsRequest.limit;
                    enabled = listApplicationEndpointsRequest.enabled;
                    token = listApplicationEndpointsRequest.token;
                    userData = listApplicationEndpointsRequest.userData;
                } else {
                    applicationUrn = listApplicationEndpointsRequest['application_urn'];
                    offset = listApplicationEndpointsRequest['offset'];
                    limit = listApplicationEndpointsRequest['limit'];
                    enabled = listApplicationEndpointsRequest['enabled'];
                    token = listApplicationEndpointsRequest['token'];
                    userData = listApplicationEndpointsRequest['user_data'];
                }
            }

        
            if (applicationUrn === null || applicationUrn === undefined) {
            throw new RequiredError('applicationUrn','Required parameter applicationUrn was null or undefined when calling listApplicationEndpoints.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (enabled !== null && enabled !== undefined) {
                localVarQueryParameter['enabled'] = enabled;
            }
            if (token !== null && token !== undefined) {
                localVarQueryParameter['token'] = token;
            }
            if (userData !== null && userData !== undefined) {
                localVarQueryParameter['user_data'] = userData;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'application_urn': applicationUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新设备属性。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateApplicationEndpoint(updateApplicationEndpointRequest?: UpdateApplicationEndpointRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/notifications/endpoints/{endpoint_urn}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let endpointUrn;

            if (updateApplicationEndpointRequest !== null && updateApplicationEndpointRequest !== undefined) {
                if (updateApplicationEndpointRequest instanceof UpdateApplicationEndpointRequest) {
                    endpointUrn = updateApplicationEndpointRequest.endpointUrn;
                    body = updateApplicationEndpointRequest.body
                } else {
                    endpointUrn = updateApplicationEndpointRequest['endpoint_urn'];
                    body = updateApplicationEndpointRequest['body'];
                }
            }

        
            if (endpointUrn === null || endpointUrn === undefined) {
            throw new RequiredError('endpointUrn','Required parameter endpointUrn was null or undefined when calling updateApplicationEndpoint.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'endpoint_urn': endpointUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): SmnClient {
    return new SmnClient(client);
}

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name: "RequiredError" = "RequiredError";
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}