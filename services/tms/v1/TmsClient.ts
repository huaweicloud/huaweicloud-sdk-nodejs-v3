import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { CreatePredefineTagsRequest } from './model/CreatePredefineTagsRequest';
import { CreatePredefineTagsResponse } from './model/CreatePredefineTagsResponse';
import { DeletePredefineTagsRequest } from './model/DeletePredefineTagsRequest';
import { DeletePredefineTagsResponse } from './model/DeletePredefineTagsResponse';
import { Link } from './model/Link';
import { ListApiVersionsRequest } from './model/ListApiVersionsRequest';
import { ListApiVersionsResponse } from './model/ListApiVersionsResponse';
import { ListPredefineTagsRequest } from './model/ListPredefineTagsRequest';
import { ListPredefineTagsResponse } from './model/ListPredefineTagsResponse';
import { ListProvidersRequest } from './model/ListProvidersRequest';
import { ListProvidersResponse } from './model/ListProvidersResponse';
import { ModifyPrefineTag } from './model/ModifyPrefineTag';
import { PredefineTag } from './model/PredefineTag';
import { PredefineTagRequest } from './model/PredefineTagRequest';
import { ProviderResponseBody } from './model/ProviderResponseBody';
import { ReqCreatePredefineTag } from './model/ReqCreatePredefineTag';
import { ReqDeletePredefineTag } from './model/ReqDeletePredefineTag';
import { ResourceTypeBody } from './model/ResourceTypeBody';
import { ShowApiVersionRequest } from './model/ShowApiVersionRequest';
import { ShowApiVersionResponse } from './model/ShowApiVersionResponse';
import { ShowTagQuotaRequest } from './model/ShowTagQuotaRequest';
import { ShowTagQuotaResponse } from './model/ShowTagQuotaResponse';
import { TagQuota } from './model/TagQuota';
import { UpdatePredefineTagsRequest } from './model/UpdatePredefineTagsRequest';
import { UpdatePredefineTagsResponse } from './model/UpdatePredefineTagsResponse';
import { VersionDetail } from './model/VersionDetail';

export class TmsClient {
    public static newBuilder(): ClientBuilder<TmsClient> {
        return new ClientBuilder<TmsClient>(newClient, 'GlobalCredentials');
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
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 创建预定义标签
     * @param {ReqCreatePredefineTag} reqCreatePredefineTag 创建标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPredefineTags(createPredefineTagsRequest?: CreatePredefineTagsRequest): Promise<void> {
        const options = ParamCreater().createPredefineTags(createPredefineTagsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 用于删除预定标签。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 删除预定义标签
     * @param {ReqDeletePredefineTag} reqDeletePredefineTag 删除标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePredefineTags(deletePredefineTagsRequest?: DeletePredefineTagsRequest): Promise<void> {
        const options = ParamCreater().deletePredefineTags(deletePredefineTagsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询标签管理服务的API版本列表。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 查询API版本列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApiVersions(): Promise<ListApiVersionsResponse> {
        const options = ParamCreater().listApiVersions();
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 用于查询预定义标签列表。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
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
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询标签管理支持的服务
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 查询标签管理支持的服务
     * @param {'zh-cn' | 'en-us'} [locale] 指定显示语言
     * @param {number} [limit] 查询记录数默认为200，limit最多为200, 最小值为1
     * @param {number} [offset] 索引位置，从offset指定的下一条数据开始查询，必须为数字，不能为负数，默认为0
     * @param {string} [provider] 云服务名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProviders(listProvidersRequest?: ListProvidersRequest): Promise<ListProvidersResponse> {
        const options = ParamCreater().listProviders(listProvidersRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定的标签管理服务API版本号详情。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 查询API版本号详情
     * @param {string} apiVersion API版本号。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showApiVersion(showApiVersionRequest?: ShowApiVersionRequest): Promise<ShowApiVersionResponse> {
        const options = ParamCreater().showApiVersion(showApiVersionRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询标签的配额信息。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 查询标签配额
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTagQuota(): Promise<ShowTagQuotaResponse> {
        const options = ParamCreater().showTagQuota();
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改预定义标签。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 修改预定义标签
     * @param {ModifyPrefineTag} reqModifyPredefineTag 修改预定义标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePredefineTags(updatePredefineTagsRequest?: UpdatePredefineTagsRequest): Promise<void> {
        const options = ParamCreater().updatePredefineTags(updatePredefineTagsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 用于创建预定标签。用户创建预定义标签后，可以使用预定义标签来给资源创建标签。该接口支持幂等特性和处理批量数据。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
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
         * 用于删除预定标签。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
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
         * 查询标签管理服务的API版本列表。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
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
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
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
         * 查询标签管理支持的服务
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
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
         * 查询指定的标签管理服务API版本号详情。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
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
         * 查询标签的配额信息。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
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
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
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