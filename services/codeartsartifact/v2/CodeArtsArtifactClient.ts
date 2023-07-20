import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { ReleaseFileVersionDo } from './model/ReleaseFileVersionDo';
import { ShowProjectReleaseFilesRequest } from './model/ShowProjectReleaseFilesRequest';
import { ShowProjectReleaseFilesResponse } from './model/ShowProjectReleaseFilesResponse';
import { ShowReleaseProjectFilesRequest } from './model/ShowReleaseProjectFilesRequest';
import { ShowReleaseProjectFilesResponse } from './model/ShowReleaseProjectFilesResponse';
import { StandardResponseResult } from './model/StandardResponseResult';

export class CodeArtsArtifactClient {
    public static newBuilder(): ClientBuilder<CodeArtsArtifactClient> {
            return new ClientBuilder<CodeArtsArtifactClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 获取项目下文件版本信息列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取项目下文件版本信息列表
     * @param {string} fileName 文件名称，模糊搜索
     * @param {number} [limit] 每页显示的条目数量
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询， offset大于等于0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showProjectReleaseFiles(showProjectReleaseFilesRequest?: ShowProjectReleaseFilesRequest): Promise<ShowProjectReleaseFilesResponse> {
        const options = ParamCreater().showProjectReleaseFiles(showProjectReleaseFilesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取项目下文件版本信息列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取项目下文件版本信息列表
     * @param {string} fileName 文件名称，模糊搜索
     * @param {number} [limit] 每页显示的条目数量
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询， offset大于等于0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showReleaseProjectFiles(showReleaseProjectFilesRequest?: ShowReleaseProjectFilesRequest): Promise<ShowReleaseProjectFilesResponse> {
        const options = ParamCreater().showReleaseProjectFiles(showReleaseProjectFilesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 获取项目下文件版本信息列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showProjectReleaseFiles(showProjectReleaseFilesRequest?: ShowProjectReleaseFilesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/release/files",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let fileName;
            
            let limit;
            
            let offset;

            if (showProjectReleaseFilesRequest !== null && showProjectReleaseFilesRequest !== undefined) {
                if (showProjectReleaseFilesRequest instanceof ShowProjectReleaseFilesRequest) {
                    fileName = showProjectReleaseFilesRequest.fileName;
                    limit = showProjectReleaseFilesRequest.limit;
                    offset = showProjectReleaseFilesRequest.offset;
                } else {
                    fileName = showProjectReleaseFilesRequest['file_name'];
                    limit = showProjectReleaseFilesRequest['limit'];
                    offset = showProjectReleaseFilesRequest['offset'];
                }
            }

        
            if (fileName === null || fileName === undefined) {
                throw new RequiredError('fileName','Required parameter fileName was null or undefined when calling showProjectReleaseFiles.');
            }
            if (fileName !== null && fileName !== undefined) {
                localVarQueryParameter['file_name'] = fileName;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取项目下文件版本信息列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showReleaseProjectFiles(showReleaseProjectFilesRequest?: ShowReleaseProjectFilesRequest) {
            const options = {
                method: "GET",
                url: "/devreposerver/v2/release/{project_id}/files",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let fileName;
            
            let limit;
            
            let offset;

            if (showReleaseProjectFilesRequest !== null && showReleaseProjectFilesRequest !== undefined) {
                if (showReleaseProjectFilesRequest instanceof ShowReleaseProjectFilesRequest) {
                    fileName = showReleaseProjectFilesRequest.fileName;
                    limit = showReleaseProjectFilesRequest.limit;
                    offset = showReleaseProjectFilesRequest.offset;
                } else {
                    fileName = showReleaseProjectFilesRequest['file_name'];
                    limit = showReleaseProjectFilesRequest['limit'];
                    offset = showReleaseProjectFilesRequest['offset'];
                }
            }

        
            if (fileName === null || fileName === undefined) {
                throw new RequiredError('fileName','Required parameter fileName was null or undefined when calling showReleaseProjectFiles.');
            }
            if (fileName !== null && fileName !== undefined) {
                localVarQueryParameter['file_name'] = fileName;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): CodeArtsArtifactClient {
    return new CodeArtsArtifactClient(client);
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