import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { DownloadApplicationCodeRequest } from './model/DownloadApplicationCodeRequest';
import { DownloadApplicationCodeResponse } from './model/DownloadApplicationCodeResponse';
import { ListPublishedTemplatesRequest } from './model/ListPublishedTemplatesRequest';
import { ListPublishedTemplatesResponse } from './model/ListPublishedTemplatesResponse';
import { PropertiesInfo } from './model/PropertiesInfo';
import { RepositoryInfo } from './model/RepositoryInfo';
import { RunDevstarTemplateJobRequest } from './model/RunDevstarTemplateJobRequest';
import { RunDevstarTemplateJobResponse } from './model/RunDevstarTemplateJobResponse';
import { ShowJobDetailRequest } from './model/ShowJobDetailRequest';
import { ShowJobDetailResponse } from './model/ShowJobDetailResponse';
import { ShowTemplateDetailRequest } from './model/ShowTemplateDetailRequest';
import { ShowTemplateDetailResponse } from './model/ShowTemplateDetailResponse';
import { TemplateJobInfo } from './model/TemplateJobInfo';
import { TemplateSimpleInfo } from './model/TemplateSimpleInfo';

export class DevStarClient {
    public static newBuilder(): ClientBuilder<DevStarClient> {
        return new ClientBuilder<DevStarClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }

    /**
     * 下载模板产物
     * @summary 下载模板产物
     * @param {string} jobId 任务id
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言类型 中文:zh-cn 英文:en-us
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public downloadApplicationCode(downloadApplicationCodeRequest?: DownloadApplicationCodeRequest): Promise<any> {
        // @ts-ignore
        return new Promise((resolve: (arg0: any) => any, reject: (arg0: any) => any) => {
            const options = ParamCreater().downloadApplicationCode(downloadApplicationCodeRequest);

            return this.hcClient.sendRequest(options).then(
                (res: any) => {
                    return resolve(res);
                },
                (err: any) => {
                    return reject(err);
                });
        });
    }
    /**
     * 通过DevStar的模板进行应用代码创建  通过 DevStar 模板创建生成应用代码的任务，并将应用代码存储于指定的 CodeHub 仓库中，可以通过返回的任务 ID 查询相关任务状态  - 接口鉴权方式 通过华为云服务获取的用户token  - 代码生成位置 应用代码生成后的地址，目前支持codehub地址和压缩包下载地址。
     * @summary Devstar 模板生成代码
     * @param {TemplateJobInfo} runDevstarTemplateJobRequestBody 创建任务参数
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言类型 中文:zh-cn 英文:en-us
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runDevstarTemplateJob(runDevstarTemplateJobRequest?: RunDevstarTemplateJobRequest): Promise<RunDevstarTemplateJobResponse> {
        // @ts-ignore
        return new Promise((resolve: (arg0: any) => any, reject: (arg0: any) => any) => {
            const options = ParamCreater().runDevstarTemplateJob(runDevstarTemplateJobRequest);

            return this.hcClient.sendRequest(options).then(
                (res: any) => {
                    return resolve(res);
                },
                (err: any) => {
                    return reject(err);
                });
        });
    }
    /**
     * 查询任务的详情  通过任务ID可以查看任务的状态 当任务结束时返回应用代码存放的位置  - 接口鉴权方式 通过华为云服务获取的用户token  - 代码生成位置 应用代码生成后的地址，目前支持codehub地址和压缩包下载地址
     * @summary 查询任务详情
     * @param {string} jobId 任务id
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言类型 中文:zh-cn 英文:en-us
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJobDetail(showJobDetailRequest?: ShowJobDetailRequest): Promise<ShowJobDetailResponse> {
        // @ts-ignore
        return new Promise((resolve: (arg0: any) => any, reject: (arg0: any) => any) => {
            const options = ParamCreater().showJobDetail(showJobDetailRequest);

            return this.hcClient.sendRequest(options).then(
                (res: any) => {
                    return resolve(res);
                },
                (err: any) => {
                    return reject(err);
                });
        });
    }
    /**
     * 查询模板列表
     * @summary 查询模板列表
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言类型 中文:zh-cn 英文:en-us
     * @param {string} [keyword] 搜索关键字,支持按名称和描述搜索，默认null
     * @param {number} [offset] 偏移量, 表示从此偏移量开始查询, offset大于等于0
     * @param {number} [limit] 每页的模板条数, 默认10
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPublishedTemplates(listPublishedTemplatesRequest?: ListPublishedTemplatesRequest): Promise<ListPublishedTemplatesResponse> {
        // @ts-ignore
        return new Promise((resolve: (arg0: any) => any, reject: (arg0: any) => any) => {
            const options = ParamCreater().listPublishedTemplates(listPublishedTemplatesRequest);

            return this.hcClient.sendRequest(options).then(
                (res: any) => {
                    return resolve(res);
                },
                (err: any) => {
                    return reject(err);
                });
        });
    }
    /**
     * 查询模板详情
     * @summary 查询模板详情
     * @param {string} templateId 模板id 说明：通过查询模板列表接口可获取相应模板 ID
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言类型 中文:zh-cn 英文:en-us
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTemplateDetail(showTemplateDetailRequest?: ShowTemplateDetailRequest): Promise<ShowTemplateDetailResponse> {
        // @ts-ignore
        return new Promise((resolve: (arg0: any) => any, reject: (arg0: any) => any) => {
            const options = ParamCreater().showTemplateDetail(showTemplateDetailRequest);

            return this.hcClient.sendRequest(options).then(
                (res: any) => {
                    return resolve(res);
                },
                (err: any) => {
                    return reject(err);
                });
        });
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 下载模板产物
         */
        downloadApplicationCode(downloadApplicationCodeRequest?: DownloadApplicationCodeRequest) {
            const options = {
                method: "GET",
                url: "/v1/application-codes",
                contentType: "",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let jobId;
            let xLanguage;

            if (downloadApplicationCodeRequest !== null && downloadApplicationCodeRequest !== undefined) {
                if (downloadApplicationCodeRequest instanceof DownloadApplicationCodeRequest) {
                    jobId = downloadApplicationCodeRequest.jobId;
                    xLanguage = downloadApplicationCodeRequest.xLanguage;
                } else {
                    jobId = downloadApplicationCodeRequest['job_id'];
                    xLanguage = downloadApplicationCodeRequest['X-Language'];
                }
            }
        
            if (jobId === null || jobId === undefined) {
                throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling downloadApplicationCode.');
            }
            if (jobId !== null && jobId !== undefined) {
                localVarQueryParameter['job_id'] = jobId;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过DevStar的模板进行应用代码创建  通过 DevStar 模板创建生成应用代码的任务，并将应用代码存储于指定的 CodeHub 仓库中，可以通过返回的任务 ID 查询相关任务状态  - 接口鉴权方式 通过华为云服务获取的用户token  - 代码生成位置 应用代码生成后的地址，目前支持codehub地址和压缩包下载地址。
         */
        runDevstarTemplateJob(runDevstarTemplateJobRequest?: RunDevstarTemplateJobRequest) {
            const options = {
                method: "POST",
                url: "/v1/jobs/template",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            var body: any;
            let xLanguage;

            if (runDevstarTemplateJobRequest !== null && runDevstarTemplateJobRequest !== undefined) {
                if (runDevstarTemplateJobRequest instanceof RunDevstarTemplateJobRequest) {
                    body = runDevstarTemplateJobRequest.body !== undefined ? runDevstarTemplateJobRequest.body.getParseParam() : runDevstarTemplateJobRequest.body;
                    xLanguage = runDevstarTemplateJobRequest.xLanguage;
                } else {
                    body = runDevstarTemplateJobRequest['body'];
                    xLanguage = runDevstarTemplateJobRequest['X-Language'];
                }
            }
        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询任务的详情  通过任务ID可以查看任务的状态 当任务结束时返回应用代码存放的位置  - 接口鉴权方式 通过华为云服务获取的用户token  - 代码生成位置 应用代码生成后的地址，目前支持codehub地址和压缩包下载地址
         */
        showJobDetail(showJobDetailRequest?: ShowJobDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/jobs/{job_id}",
                contentType: "",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            let jobId;
            let xLanguage;

            if (showJobDetailRequest !== null && showJobDetailRequest !== undefined) {
                if (showJobDetailRequest instanceof ShowJobDetailRequest) {
                    jobId = showJobDetailRequest.jobId;
                    xLanguage = showJobDetailRequest.xLanguage;
                } else {
                    jobId = showJobDetailRequest['job_id'];
                    xLanguage = showJobDetailRequest['X-Language'];
                }
            }
        
            if (jobId === null || jobId === undefined) {
                throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showJobDetail.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询模板列表
         */
        listPublishedTemplates(listPublishedTemplatesRequest?: ListPublishedTemplatesRequest) {
            const options = {
                method: "GET",
                url: "/v1/templates",
                contentType: "",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let xLanguage;
            let keyword;
            let offset;
            let limit;

            if (listPublishedTemplatesRequest !== null && listPublishedTemplatesRequest !== undefined) {
                if (listPublishedTemplatesRequest instanceof ListPublishedTemplatesRequest) {
                    xLanguage = listPublishedTemplatesRequest.xLanguage;
                    keyword = listPublishedTemplatesRequest.keyword;
                    offset = listPublishedTemplatesRequest.offset;
                    limit = listPublishedTemplatesRequest.limit;
                } else {
                    xLanguage = listPublishedTemplatesRequest['X-Language'];
                    keyword = listPublishedTemplatesRequest['keyword'];
                    offset = listPublishedTemplatesRequest['offset'];
                    limit = listPublishedTemplatesRequest['limit'];
                }
            }
        
            if (keyword !== null && keyword !== undefined) {
                localVarQueryParameter['keyword'] = keyword;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询模板详情
         */
        showTemplateDetail(showTemplateDetailRequest?: ShowTemplateDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/templates/{template_id}",
                contentType: "",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            let templateId;
            let xLanguage;

            if (showTemplateDetailRequest !== null && showTemplateDetailRequest !== undefined) {
                if (showTemplateDetailRequest instanceof ShowTemplateDetailRequest) {
                    templateId = showTemplateDetailRequest.templateId;
                    xLanguage = showTemplateDetailRequest.xLanguage;
                } else {
                    templateId = showTemplateDetailRequest['template_id'];
                    xLanguage = showTemplateDetailRequest['X-Language'];
                }
            }
        
            if (templateId === null || templateId === undefined) {
                throw new RequiredError('templateId','Required parameter templateId was null or undefined when calling showTemplateDetail.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'template_id': templateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): DevStarClient {
    return new DevStarClient(client);
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