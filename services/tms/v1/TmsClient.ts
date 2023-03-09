import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { CreatePredefineTagsRequest } from './model/CreatePredefineTagsRequest';
import { CreatePredefineTagsResponse } from './model/CreatePredefineTagsResponse';
import { CreateResourceTagRequest } from './model/CreateResourceTagRequest';
import { CreateResourceTagResponse } from './model/CreateResourceTagResponse';
import { CreateTagRequest } from './model/CreateTagRequest';
import { DeletePredefineTagsRequest } from './model/DeletePredefineTagsRequest';
import { DeletePredefineTagsResponse } from './model/DeletePredefineTagsResponse';
import { DeleteResourceTagRequest } from './model/DeleteResourceTagRequest';
import { DeleteResourceTagResponse } from './model/DeleteResourceTagResponse';
import { DeleteTagRequest } from './model/DeleteTagRequest';
import { Errors } from './model/Errors';
import { Link } from './model/Link';
import { ListApiVersionsRequest } from './model/ListApiVersionsRequest';
import { ListApiVersionsResponse } from './model/ListApiVersionsResponse';
import { ListPredefineTagsRequest } from './model/ListPredefineTagsRequest';
import { ListPredefineTagsResponse } from './model/ListPredefineTagsResponse';
import { ListProvidersRequest } from './model/ListProvidersRequest';
import { ListProvidersResponse } from './model/ListProvidersResponse';
import { ListResourceRequest } from './model/ListResourceRequest';
import { ListResourceResponse } from './model/ListResourceResponse';
import { ListTagKeysRequest } from './model/ListTagKeysRequest';
import { ListTagKeysResponse } from './model/ListTagKeysResponse';
import { ListTagValuesRequest } from './model/ListTagValuesRequest';
import { ListTagValuesResponse } from './model/ListTagValuesResponse';
import { ModifyPrefineTag } from './model/ModifyPrefineTag';
import { PageInfoTagKeys } from './model/PageInfoTagKeys';
import { PageInfoTagValues } from './model/PageInfoTagValues';
import { PredefineTag } from './model/PredefineTag';
import { PredefineTagRequest } from './model/PredefineTagRequest';
import { ProviderResponseBody } from './model/ProviderResponseBody';
import { ReqCreatePredefineTag } from './model/ReqCreatePredefineTag';
import { ReqCreateTag } from './model/ReqCreateTag';
import { ReqDeletePredefineTag } from './model/ReqDeletePredefineTag';
import { ReqDeleteTag } from './model/ReqDeleteTag';
import { ResourceTagBody } from './model/ResourceTagBody';
import { ResourceTypeBody } from './model/ResourceTypeBody';
import { Resources } from './model/Resources';
import { ResqTagResource } from './model/ResqTagResource';
import { ShowApiVersionRequest } from './model/ShowApiVersionRequest';
import { ShowApiVersionResponse } from './model/ShowApiVersionResponse';
import { ShowResourceTagRequest } from './model/ShowResourceTagRequest';
import { ShowResourceTagResponse } from './model/ShowResourceTagResponse';
import { ShowTagQuotaRequest } from './model/ShowTagQuotaRequest';
import { ShowTagQuotaResponse } from './model/ShowTagQuotaResponse';
import { Tag } from './model/Tag';
import { TagCreateResponseItem } from './model/TagCreateResponseItem';
import { TagDeleteResponseItem } from './model/TagDeleteResponseItem';
import { TagQuota } from './model/TagQuota';
import { TagVo } from './model/TagVo';
import { UpdatePredefineTagsRequest } from './model/UpdatePredefineTagsRequest';
import { UpdatePredefineTagsResponse } from './model/UpdatePredefineTagsResponse';
import { VersionDetail } from './model/VersionDetail';

export class TmsClient {
    public static newBuilder(): ClientBuilder<TmsClient> {
            return new ClientBuilder<TmsClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 用于创建预定标签。用户创建预定义标签后，可以使用预定义标签来给资源创建标签。该接口支持幂等特性和处理批量数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建预定义标签
     * @param {ReqCreatePredefineTag} reqCreatePredefineTag 创建标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPredefineTags(createPredefineTagsRequest?: CreatePredefineTagsRequest): Promise<CreatePredefineTagsResponse> {
        const options = ParamCreater().createPredefineTags(createPredefineTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用于给云服务的多个资源添加标签，每个资源最多可添加10个标签，每次最多支持批量操作20个资源。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加标签
     * @param {ReqCreateTag} createResourceTagRequestBody 打标签
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
     * 用于删除预定标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除预定义标签
     * @param {ReqDeletePredefineTag} reqDeletePredefineTag 删除标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePredefineTags(deletePredefineTagsRequest?: DeletePredefineTagsRequest): Promise<DeletePredefineTagsResponse> {
        const options = ParamCreater().deletePredefineTags(deletePredefineTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用于批量移除云服务多个资源的标签，每个资源最多支持移除10个标签，每次最多支持批量操作20个资源。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量移除标签
     * @param {ReqDeleteTag} deleteResourceTagRequestBody 打标签请求体
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
     * 查询标签管理服务的API版本列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询API版本列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApiVersions(): Promise<ListApiVersionsResponse> {
        const options = ParamCreater().listApiVersions();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用于查询预定义标签列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询预定义标签列表
     * @param {string} [key] 键，支持模糊查询，不区分大小写，如果包含“non-URL-safe”的字符，需要进行“urlencoded”。
     * @param {string} [value] 值，支持模糊查询，不区分大小写，如果包含“non-URL-safe”的字符，需要进行“urlencoded”。
     * @param {number} [limit] 查询记录数。 最小为1，最大为1000，未输入时默认为10，为0时不限制查询数据条数。
     * @param {string} [marker] 分页位置标识（索引）。 从marker指定索引的下一条数据开始查询。 说明： 查询第一页数据时，不需要传入此参数，查询后续页码数据时，将查询前一页数据响应体中marker值配入此参数，当返回的tags为空列表时表示查询到最后一页。
     * @param {string} [orderField] 排序字段： 可输入的值包含（区分大小写）：update_time（更新时间）、key（键）、value（值）。 只能选择以上排序字段中的一个，并按照排序方法字段order_method进行排序，如果不传则默认值为：update_time。 如以下： 若该字段为update_time，则剩余两个默认字段排序为key升序，value升序。 若该字段如为key，则剩余两个默认字段排序为update_time降序，value升序。 若该字段如为value，则剩余两个默认字段排序为update_time降序，key升序。 若该字段不传，默认字段为update_time，则剩余两个默认字段排序为key升序，value升序。
     * @param {'asc' | 'desc'} [orderMethod] order_field字段的排序方法。 可输入的值包含（区分大小写）： asc（升序） desc（降序） 只能选择以上值的其中之一。 不传则默认值为：desc
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPredefineTags(listPredefineTagsRequest?: ListPredefineTagsRequest): Promise<ListPredefineTagsResponse> {
        const options = ParamCreater().listPredefineTags(listPredefineTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询标签管理支持的服务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询标签管理支持的服务
     * @param {'zh-cn' | 'en-us'} [locale] 指定显示语言
     * @param {number} [limit] 查询记录数默认为200，limit最多为200，最小值为1。
     * @param {number} [offset] 索引位置，从offset指定的下一条数据开始查询，必须为数字，不能为负数，默认为0。
     * @param {string} [provider] 云服务名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProviders(listProvidersRequest?: ListProvidersRequest): Promise<ListProvidersResponse> {
        const options = ParamCreater().listProviders(listProvidersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据标签过滤资源。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据标签过滤资源
     * @param {ResqTagResource} listResourceRequestBody 获取标签下的资源
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listResource(listResourceRequest?: ListResourceRequest): Promise<ListResourceResponse> {
        const options = ParamCreater().listResource(listResourceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定区域的所有标签键.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询标签键列表
     * @param {string} [regionId] 区域ID
     * @param {number} [limit] 查询记录数。 最小为1，最大为200，未输入时默认为200。
     * @param {string} [marker] 分页位置标识（索引）。 从marker指定索引的下一条数据开始查询。 说明： 查询第一页数据时，不需要传入此参数，查询后续页码数据时，将查询前一页数据响应体中marker值配入此参数，当返回的next_marker为空时表示查询到最后一页。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTagKeys(listTagKeysRequest?: ListTagKeysRequest): Promise<ListTagKeysResponse> {
        const options = ParamCreater().listTagKeys(listTagKeysRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定区域的标签键下的所有标签值。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询标签值列表
     * @param {string} key 标签键
     * @param {string} [regionId] 区域ID
     * @param {number} [limit] 查询记录数。 最小为1，最大为200，未输入时默认为200。
     * @param {string} [marker] 分页位置标识（索引）。 从marker指定索引的下一条数据开始查询。 说明： 查询第一页数据时，不需要传入此参数，查询后续页码数据时，将查询前一页数据响应体中marker值配入此参数，当返回的next_marker为空时表示查询到最后一页。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTagValues(listTagValuesRequest?: ListTagValuesRequest): Promise<ListTagValuesResponse> {
        const options = ParamCreater().listTagValues(listTagValuesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定的标签管理服务API版本号详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询API版本号详情
     * @param {string} apiVersion API版本号。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showApiVersion(showApiVersionRequest?: ShowApiVersionRequest): Promise<ShowApiVersionResponse> {
        const options = ParamCreater().showApiVersion(showApiVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询单个资源上的标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源标签
     * @param {string} resourceId 资源ID
     * @param {string} resourceType 资源类型
     * @param {string} [projectId] 项目ID，region级资源必选。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showResourceTag(showResourceTagRequest?: ShowResourceTagRequest): Promise<ShowResourceTagResponse> {
        const options = ParamCreater().showResourceTag(showResourceTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询标签的配额信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询标签配额
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTagQuota(): Promise<ShowTagQuotaResponse> {
        const options = ParamCreater().showTagQuota();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改预定义标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改预定义标签
     * @param {ModifyPrefineTag} reqModifyPredefineTag 修改预定义标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePredefineTags(updatePredefineTagsRequest?: UpdatePredefineTagsRequest): Promise<UpdatePredefineTagsResponse> {
        const options = ParamCreater().updatePredefineTags(updatePredefineTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 用于创建预定标签。用户创建预定义标签后，可以使用预定义标签来给资源创建标签。该接口支持幂等特性和处理批量数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPredefineTags(createPredefineTagsRequest?: CreatePredefineTagsRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/predefine_tags/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createPredefineTagsRequest !== null && createPredefineTagsRequest !== undefined) {
                if (createPredefineTagsRequest instanceof CreatePredefineTagsRequest) {
                    body = createPredefineTagsRequest.body
                } else {
                    body = createPredefineTagsRequest['body'];
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
         * 用于给云服务的多个资源添加标签，每个资源最多可添加10个标签，每次最多支持批量操作20个资源。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createResourceTag(createResourceTagRequest?: CreateResourceTagRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/resource-tags/batch-create",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createResourceTagRequest !== null && createResourceTagRequest !== undefined) {
                if (createResourceTagRequest instanceof CreateResourceTagRequest) {
                    body = createResourceTagRequest.body
                } else {
                    body = createResourceTagRequest['body'];
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
         * 用于删除预定标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePredefineTags(deletePredefineTagsRequest?: DeletePredefineTagsRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/predefine_tags/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (deletePredefineTagsRequest !== null && deletePredefineTagsRequest !== undefined) {
                if (deletePredefineTagsRequest instanceof DeletePredefineTagsRequest) {
                    body = deletePredefineTagsRequest.body
                } else {
                    body = deletePredefineTagsRequest['body'];
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
         * 用于批量移除云服务多个资源的标签，每个资源最多支持移除10个标签，每次最多支持批量操作20个资源。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteResourceTag(deleteResourceTagRequest?: DeleteResourceTagRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/resource-tags/batch-delete",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (deleteResourceTagRequest !== null && deleteResourceTagRequest !== undefined) {
                if (deleteResourceTagRequest instanceof DeleteResourceTagRequest) {
                    body = deleteResourceTagRequest.body
                } else {
                    body = deleteResourceTagRequest['body'];
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
         * 查询标签管理服务的API版本列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApiVersions() {
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
         * 用于查询预定义标签列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPredefineTags(listPredefineTagsRequest?: ListPredefineTagsRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/predefine_tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let key;
            
            let value;
            
            let limit;
            
            let marker;
            
            let orderField;
            
            let orderMethod;

            if (listPredefineTagsRequest !== null && listPredefineTagsRequest !== undefined) {
                if (listPredefineTagsRequest instanceof ListPredefineTagsRequest) {
                    key = listPredefineTagsRequest.key;
                    value = listPredefineTagsRequest.value;
                    limit = listPredefineTagsRequest.limit;
                    marker = listPredefineTagsRequest.marker;
                    orderField = listPredefineTagsRequest.orderField;
                    orderMethod = listPredefineTagsRequest.orderMethod;
                } else {
                    key = listPredefineTagsRequest['key'];
                    value = listPredefineTagsRequest['value'];
                    limit = listPredefineTagsRequest['limit'];
                    marker = listPredefineTagsRequest['marker'];
                    orderField = listPredefineTagsRequest['order_field'];
                    orderMethod = listPredefineTagsRequest['order_method'];
                }
            }

        
            if (key !== null && key !== undefined) {
                localVarQueryParameter['key'] = key;
            }
            if (value !== null && value !== undefined) {
                localVarQueryParameter['value'] = value;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (orderField !== null && orderField !== undefined) {
                localVarQueryParameter['order_field'] = orderField;
            }
            if (orderMethod !== null && orderMethod !== undefined) {
                localVarQueryParameter['order_method'] = orderMethod;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询标签管理支持的服务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProviders(listProvidersRequest?: ListProvidersRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/tms/providers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let locale;
            
            let limit;
            
            let offset;
            
            let provider;

            if (listProvidersRequest !== null && listProvidersRequest !== undefined) {
                if (listProvidersRequest instanceof ListProvidersRequest) {
                    locale = listProvidersRequest.locale;
                    limit = listProvidersRequest.limit;
                    offset = listProvidersRequest.offset;
                    provider = listProvidersRequest.provider;
                } else {
                    locale = listProvidersRequest['locale'];
                    limit = listProvidersRequest['limit'];
                    offset = listProvidersRequest['offset'];
                    provider = listProvidersRequest['provider'];
                }
            }

        
            if (locale !== null && locale !== undefined) {
                localVarQueryParameter['locale'] = locale;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (provider !== null && provider !== undefined) {
                localVarQueryParameter['provider'] = provider;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据标签过滤资源。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listResource(listResourceRequest?: ListResourceRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/resource-instances/filter",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (listResourceRequest !== null && listResourceRequest !== undefined) {
                if (listResourceRequest instanceof ListResourceRequest) {
                    body = listResourceRequest.body
                } else {
                    body = listResourceRequest['body'];
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
         * 查询指定区域的所有标签键.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTagKeys(listTagKeysRequest?: ListTagKeysRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/tag-keys",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let regionId;
            
            let limit;
            
            let marker;

            if (listTagKeysRequest !== null && listTagKeysRequest !== undefined) {
                if (listTagKeysRequest instanceof ListTagKeysRequest) {
                    regionId = listTagKeysRequest.regionId;
                    limit = listTagKeysRequest.limit;
                    marker = listTagKeysRequest.marker;
                } else {
                    regionId = listTagKeysRequest['region_id'];
                    limit = listTagKeysRequest['limit'];
                    marker = listTagKeysRequest['marker'];
                }
            }

        
            if (regionId !== null && regionId !== undefined) {
                localVarQueryParameter['region_id'] = regionId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定区域的标签键下的所有标签值。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTagValues(listTagValuesRequest?: ListTagValuesRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/tag-values",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let key;
            
            let regionId;
            
            let limit;
            
            let marker;

            if (listTagValuesRequest !== null && listTagValuesRequest !== undefined) {
                if (listTagValuesRequest instanceof ListTagValuesRequest) {
                    key = listTagValuesRequest.key;
                    regionId = listTagValuesRequest.regionId;
                    limit = listTagValuesRequest.limit;
                    marker = listTagValuesRequest.marker;
                } else {
                    key = listTagValuesRequest['key'];
                    regionId = listTagValuesRequest['region_id'];
                    limit = listTagValuesRequest['limit'];
                    marker = listTagValuesRequest['marker'];
                }
            }

        
            if (key === null || key === undefined) {
                throw new RequiredError('key','Required parameter key was null or undefined when calling listTagValues.');
            }
            if (key !== null && key !== undefined) {
                localVarQueryParameter['key'] = key;
            }
            if (regionId !== null && regionId !== undefined) {
                localVarQueryParameter['region_id'] = regionId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定的标签管理服务API版本号详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showApiVersion(showApiVersionRequest?: ShowApiVersionRequest) {
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

            if (showApiVersionRequest !== null && showApiVersionRequest !== undefined) {
                if (showApiVersionRequest instanceof ShowApiVersionRequest) {
                    apiVersion = showApiVersionRequest.apiVersion;
                } else {
                    apiVersion = showApiVersionRequest['api_version'];
                }
            }

        
            if (apiVersion === null || apiVersion === undefined) {
            throw new RequiredError('apiVersion','Required parameter apiVersion was null or undefined when calling showApiVersion.');
            }

            options.pathParams = { 'api_version': apiVersion, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询单个资源上的标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showResourceTag(showResourceTagRequest?: ShowResourceTagRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/resources/{resource_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let resourceId;
            
            let resourceType;
            
            let projectId;

            if (showResourceTagRequest !== null && showResourceTagRequest !== undefined) {
                if (showResourceTagRequest instanceof ShowResourceTagRequest) {
                    resourceId = showResourceTagRequest.resourceId;
                    resourceType = showResourceTagRequest.resourceType;
                    projectId = showResourceTagRequest.projectId;
                } else {
                    resourceId = showResourceTagRequest['resource_id'];
                    resourceType = showResourceTagRequest['resource_type'];
                    projectId = showResourceTagRequest['project_id'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling showResourceTag.');
            }
            if (resourceType === null || resourceType === undefined) {
                throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling showResourceTag.');
            }
            if (resourceType !== null && resourceType !== undefined) {
                localVarQueryParameter['resource_type'] = resourceType;
            }
            if (projectId !== null && projectId !== undefined) {
                localVarQueryParameter['project_id'] = projectId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询标签的配额信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTagQuota() {
            const options = {
                method: "GET",
                url: "/v1.0/tms/quotas",
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
         * 修改预定义标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePredefineTags(updatePredefineTagsRequest?: UpdatePredefineTagsRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/predefine_tags",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (updatePredefineTagsRequest !== null && updatePredefineTagsRequest !== undefined) {
                if (updatePredefineTagsRequest instanceof UpdatePredefineTagsRequest) {
                    body = updatePredefineTagsRequest.body
                } else {
                    body = updatePredefineTagsRequest['body'];
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
    
    }
};

function newClient(client: HcClient): TmsClient {
    return new TmsClient(client);
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