import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AggTag } from './model/AggTag';
import { BatchCreateDeleteTagsRequest } from './model/BatchCreateDeleteTagsRequest';
import { BatchCreateDeleteTagsResponse } from './model/BatchCreateDeleteTagsResponse';
import { CreateTagRequest } from './model/CreateTagRequest';
import { CreateTagRequestBody } from './model/CreateTagRequestBody';
import { CreateTagResponse } from './model/CreateTagResponse';
import { DeleteTagRequest } from './model/DeleteTagRequest';
import { DeleteTagResponse } from './model/DeleteTagResponse';
import { FilterTagResource } from './model/FilterTagResource';
import { ListDomainTagsRequest } from './model/ListDomainTagsRequest';
import { ListDomainTagsResponse } from './model/ListDomainTagsResponse';
import { ListResourceByFilterTagRequest } from './model/ListResourceByFilterTagRequest';
import { ListResourceByFilterTagRequestBody } from './model/ListResourceByFilterTagRequestBody';
import { ListResourceByFilterTagResponse } from './model/ListResourceByFilterTagResponse';
import { ListTagsRequest } from './model/ListTagsRequest';
import { ListTagsResponse } from './model/ListTagsResponse';
import { ResourceTags } from './model/ResourceTags';
import { Tag } from './model/Tag';

export class CcClient {
    public static newBuilder(): ClientBuilder<CcClient> {
            return new ClientBuilder<CcClient>(newClient, 'GlobalCredentials');
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 批量创建和删除标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量创建和删除资源标签
     * @param {string} resourceId 资源ID
     * @param {'cloud-connection' | 'bandwidth-package'} resourceType 资源类型: - cloud-connection: 云连接 - bandwidth-package: 带宽包
     * @param {ResourceTags} [batchCreateDeleteTagsRequestBody] 待更新/添加/删除的资源标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateDeleteTags(batchCreateDeleteTagsRequest?: BatchCreateDeleteTagsRequest): Promise<BatchCreateDeleteTagsResponse> {
        const options = ParamCreater().batchCreateDeleteTags(batchCreateDeleteTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加资源标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加资源标签
     * @param {string} resourceId 资源ID。
     * @param {'cloud-connection' | 'bandwidth-package'} resourceType 资源类型: - cloud-connection: 云连接 - bandwidth-package: 带宽包
     * @param {CreateTagRequestBody} [createTagRequestBody] 待添加/更新的资源标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTag(createTagRequest?: CreateTagRequest): Promise<CreateTagResponse> {
        const options = ParamCreater().createTag(createTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除资源标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除资源标签
     * @param {string} resourceId 资源ID
     * @param {string} tagKey 待删除资源标签的key
     * @param {'cloud-connection' | 'bandwidth-package'} resourceType 资源类型: - cloud-connection: 云连接 - bandwidth-package: 带宽包
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTag(deleteTagRequest?: DeleteTagRequest): Promise<DeleteTagResponse> {
        const options = ParamCreater().deleteTag(deleteTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询账户资源标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询账户资源标签
     * @param {'cloud-connection' | 'bandwidth-package'} resourceType 资源类型: - cloud-connection: 云连接 - bandwidth-package: 带宽包
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDomainTags(listDomainTagsRequest?: ListDomainTagsRequest): Promise<ListDomainTagsResponse> {
        const options = ParamCreater().listDomainTags(listDomainTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源实例
     * @param {'cloud-connection' | 'bandwidth-package'} resourceType 资源类型: - cloud-connection: 云连接 - bandwidth-package: 带宽包
     * @param {ListResourceByFilterTagRequestBody} [listResourceByFilterTagRequestBody] 查询资源实例的过滤条件
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listResourceByFilterTag(listResourceByFilterTagRequest?: ListResourceByFilterTagRequest): Promise<ListResourceByFilterTagResponse> {
        const options = ParamCreater().listResourceByFilterTag(listResourceByFilterTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源标签
     * @param {'cloud-connection' | 'bandwidth-package'} resourceType 资源类型: - cloud-connection: 云连接 - bandwidth-package: 带宽包
     * @param {string} resourceId 资源ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTags(listTagsRequest?: ListTagsRequest): Promise<ListTagsResponse> {
        const options = ParamCreater().listTags(listTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 批量创建和删除标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateDeleteTags(batchCreateDeleteTagsRequest?: BatchCreateDeleteTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/ccaas/{resource_type}/{resource_id}/tags/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceId;
            
            let resourceType;

            if (batchCreateDeleteTagsRequest !== null && batchCreateDeleteTagsRequest !== undefined) {
                if (batchCreateDeleteTagsRequest instanceof BatchCreateDeleteTagsRequest) {
                    resourceId = batchCreateDeleteTagsRequest.resourceId;
                    resourceType = batchCreateDeleteTagsRequest.resourceType;
                    body = batchCreateDeleteTagsRequest.body
                } else {
                    resourceId = batchCreateDeleteTagsRequest['resource_id'];
                    resourceType = batchCreateDeleteTagsRequest['resource_type'];
                    body = batchCreateDeleteTagsRequest['body'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling batchCreateDeleteTags.');
            }
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling batchCreateDeleteTags.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_id': resourceId,'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加资源标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTag(createTagRequest?: CreateTagRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/ccaas/{resource_type}/{resource_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceId;
            
            let resourceType;

            if (createTagRequest !== null && createTagRequest !== undefined) {
                if (createTagRequest instanceof CreateTagRequest) {
                    resourceId = createTagRequest.resourceId;
                    resourceType = createTagRequest.resourceType;
                    body = createTagRequest.body
                } else {
                    resourceId = createTagRequest['resource_id'];
                    resourceType = createTagRequest['resource_type'];
                    body = createTagRequest['body'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling createTag.');
            }
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling createTag.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_id': resourceId,'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除资源标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTag(deleteTagRequest?: DeleteTagRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{domain_id}/ccaas/{resource_type}/{resource_id}/tags/{tag_key}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceId;
            
            let tagKey;
            
            let resourceType;

            if (deleteTagRequest !== null && deleteTagRequest !== undefined) {
                if (deleteTagRequest instanceof DeleteTagRequest) {
                    resourceId = deleteTagRequest.resourceId;
                    tagKey = deleteTagRequest.tagKey;
                    resourceType = deleteTagRequest.resourceType;
                } else {
                    resourceId = deleteTagRequest['resource_id'];
                    tagKey = deleteTagRequest['tag_key'];
                    resourceType = deleteTagRequest['resource_type'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling deleteTag.');
            }
            if (tagKey === null || tagKey === undefined) {
            throw new RequiredError('tagKey','Required parameter tagKey was null or undefined when calling deleteTag.');
            }
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling deleteTag.');
            }

            options.pathParams = { 'resource_id': resourceId,'tag_key': tagKey,'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询账户资源标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDomainTags(listDomainTagsRequest?: ListDomainTagsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/ccaas/{resource_type}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceType;

            if (listDomainTagsRequest !== null && listDomainTagsRequest !== undefined) {
                if (listDomainTagsRequest instanceof ListDomainTagsRequest) {
                    resourceType = listDomainTagsRequest.resourceType;
                } else {
                    resourceType = listDomainTagsRequest['resource_type'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling listDomainTags.');
            }

            options.pathParams = { 'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询资源实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listResourceByFilterTag(listResourceByFilterTagRequest?: ListResourceByFilterTagRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/ccaas/{resource_type}/resource-instances/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceType;

            if (listResourceByFilterTagRequest !== null && listResourceByFilterTagRequest !== undefined) {
                if (listResourceByFilterTagRequest instanceof ListResourceByFilterTagRequest) {
                    resourceType = listResourceByFilterTagRequest.resourceType;
                    body = listResourceByFilterTagRequest.body
                } else {
                    resourceType = listResourceByFilterTagRequest['resource_type'];
                    body = listResourceByFilterTagRequest['body'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling listResourceByFilterTag.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询资源标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTags(listTagsRequest?: ListTagsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/ccaas/{resource_type}/{resource_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceType;
            
            let resourceId;

            if (listTagsRequest !== null && listTagsRequest !== undefined) {
                if (listTagsRequest instanceof ListTagsRequest) {
                    resourceType = listTagsRequest.resourceType;
                    resourceId = listTagsRequest.resourceId;
                } else {
                    resourceType = listTagsRequest['resource_type'];
                    resourceId = listTagsRequest['resource_id'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling listTags.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling listTags.');
            }

            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): CcClient {
    return new CcClient(client);
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