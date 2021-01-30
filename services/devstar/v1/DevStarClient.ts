import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { CodehubJobInfo } from './model/CodehubJobInfo';
import { CreateTemplateViewHistoriesRequest } from './model/CreateTemplateViewHistoriesRequest';
import { CreateTemplateViewHistoriesResponse } from './model/CreateTemplateViewHistoriesResponse';
import { DownloadApplicationCodeRequest } from './model/DownloadApplicationCodeRequest';
import { DownloadApplicationCodeResponse } from './model/DownloadApplicationCodeResponse';
import { ListPublishedTemplatesRequest } from './model/ListPublishedTemplatesRequest';
import { ListPublishedTemplatesResponse } from './model/ListPublishedTemplatesResponse';
import { ListTemplateViewHistoriesRequest } from './model/ListTemplateViewHistoriesRequest';
import { ListTemplateViewHistoriesResponse } from './model/ListTemplateViewHistoriesResponse';
import { ListTemplatesV2Request } from './model/ListTemplatesV2Request';
import { ListTemplatesV2Response } from './model/ListTemplatesV2Response';
import { PipelineTemplateInfo } from './model/PipelineTemplateInfo';
import { PropertiesInfo } from './model/PropertiesInfo';
import { Reference } from './model/Reference';
import { RepositoryInfo } from './model/RepositoryInfo';
import { RunCodehubTemplateJobRequest } from './model/RunCodehubTemplateJobRequest';
import { RunCodehubTemplateJobResponse } from './model/RunCodehubTemplateJobResponse';
import { RunDevstarTemplateJobRequest } from './model/RunDevstarTemplateJobRequest';
import { RunDevstarTemplateJobResponse } from './model/RunDevstarTemplateJobResponse';
import { ShowJobDetailRequest } from './model/ShowJobDetailRequest';
import { ShowJobDetailResponse } from './model/ShowJobDetailResponse';
import { ShowTemplateDetailRequest } from './model/ShowTemplateDetailRequest';
import { ShowTemplateDetailResponse } from './model/ShowTemplateDetailResponse';
import { ShowTemplateFileRequest } from './model/ShowTemplateFileRequest';
import { ShowTemplateFileResponse } from './model/ShowTemplateFileResponse';
import { ShowTemplateV3Request } from './model/ShowTemplateV3Request';
import { ShowTemplateV3Response } from './model/ShowTemplateV3Response';
import { TagInfo } from './model/TagInfo';
import { TemplateInfo } from './model/TemplateInfo';
import { TemplateJobInfo } from './model/TemplateJobInfo';
import { TemplateProductExt } from './model/TemplateProductExt';
import { TemplateQueryV2 } from './model/TemplateQueryV2';
import { TemplateSimpleInfo } from './model/TemplateSimpleInfo';
import { TemplateViewHistory } from './model/TemplateViewHistory';
import { TemplatesInfo } from './model/TemplatesInfo';
import { TopicCategory } from './model/TopicCategory';

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
     * 通过任务ID下载ZIP格式的代码工程。
     * @summary 下载代码工程
     * @param {string} jobId 任务id
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言类型 中文:zh-cn 英文:en-us
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public downloadApplicationCode(downloadApplicationCodeRequest?: DownloadApplicationCodeRequest): Promise<any> {
        // @ts-ignore
        return new Promise((resolve: (arg0: any) => any, reject: (arg0: any) => any) => {
            const options = ParamCreater().downloadApplicationCode(downloadApplicationCodeRequest);
            options['responseHeaders'] = [''];

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
     * 通过 Codehub 的模板进行应用代码创建  通过 Codehub 模板创建生成应用代码的任务，并将应用代码存储于指定的 CodeHub 仓库中或者生成代码压缩包，可以通过返回的任务 ID 查询相关任务状态  - 接口鉴权方式 通过华为云服务获取的用户token  - 代码生成位置 应用代码生成后的地址，目前支持codehub地址和压缩包下载地址。
     * @summary CodeHub 模板生成代码
     * @param {CodehubJobInfo} runCodehubTemplateJobRequestBody 创建任务参数
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言类型 中文:zh-cn 英文:en-us
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runCodehubTemplateJob(runCodehubTemplateJobRequest?: RunCodehubTemplateJobRequest): Promise<RunCodehubTemplateJobResponse> {
        // @ts-ignore
        return new Promise((resolve: (arg0: any) => any, reject: (arg0: any) => any) => {
            const options = ParamCreater().runCodehubTemplateJob(runCodehubTemplateJobRequest);
            options['responseHeaders'] = [''];

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
            options['responseHeaders'] = [''];

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
            options['responseHeaders'] = [''];

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
     * 读取模板文件
     * @summary 读取模板文件
     * @param {string} templateId 模板ID
     * @param {string} filePath 文件相对路径
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言类型 中文:zh-cn 英文:en-us
     * @param {'source-package' | 'introduction'} [type] 读取文件来源. source-package: 源文件压缩包, introduction: 说明文件
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTemplateFile(showTemplateFileRequest?: ShowTemplateFileRequest): Promise<ShowTemplateFileResponse> {
        // @ts-ignore
        return new Promise((resolve: (arg0: any) => any, reject: (arg0: any) => any) => {
            const options = ParamCreater().showTemplateFile(showTemplateFileRequest);
            options['responseHeaders'] = [''];

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
     * 生成模板浏览记录 
     * @summary 生成模板浏览历史记录
     * @param {TemplatesInfo} createTemplateViewHistoriesRequestBody 模板信息
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言类型 中文:zh-cn 英文:en-us
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTemplateViewHistories(createTemplateViewHistoriesRequest?: CreateTemplateViewHistoriesRequest): Promise<CreateTemplateViewHistoriesResponse> {
        // @ts-ignore
        return new Promise((resolve: (arg0: any) => any, reject: (arg0: any) => any) => {
            const options = ParamCreater().createTemplateViewHistories(createTemplateViewHistoriesRequest);
            options['responseHeaders'] = [''];

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
            options['responseHeaders'] = [''];

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
     * 查询用户浏览过的模板(只返回最近浏览的5个模板) 
     * @summary 我浏览的模板记录
     * @param {0 | 1} platformSource 平台来源（0:codelabs、1:devstar）
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言类型 中文:zh-cn 英文:en-us
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTemplateViewHistories(listTemplateViewHistoriesRequest?: ListTemplateViewHistoriesRequest): Promise<ListTemplateViewHistoriesResponse> {
        // @ts-ignore
        return new Promise((resolve: (arg0: any) => any, reject: (arg0: any) => any) => {
            const options = ParamCreater().listTemplateViewHistories(listTemplateViewHistoriesRequest);
            options['responseHeaders'] = [''];

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
     * @param {string} actionId query(查询)
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言类型 中文:zh-cn 英文:en-us
     * @param {TemplateQueryV2} [listTemplatesV2RequestBody] 模板列表查询参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTemplatesV2(listTemplatesV2Request?: ListTemplatesV2Request): Promise<ListTemplatesV2Response> {
        // @ts-ignore
        return new Promise((resolve: (arg0: any) => any, reject: (arg0: any) => any) => {
            const options = ParamCreater().listTemplatesV2(listTemplatesV2Request);
            options['responseHeaders'] = [''];

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
     * 获取模板详情-模板id、名称、描述、作者、标签、上架时间等信息。 
     * @summary 模板详情
     * @param {string} templateId 模板ID
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言类型 中文:zh-cn 英文:en-us
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTemplateV3(showTemplateV3Request?: ShowTemplateV3Request): Promise<ShowTemplateV3Response> {
        // @ts-ignore
        return new Promise((resolve: (arg0: any) => any, reject: (arg0: any) => any) => {
            const options = ParamCreater().showTemplateV3(showTemplateV3Request);
            options['responseHeaders'] = [''];

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
            options['responseHeaders'] = [''];

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
         * 通过任务ID下载ZIP格式的代码工程。
         */
        downloadApplicationCode(downloadApplicationCodeRequest?: DownloadApplicationCodeRequest) {
            const options = {
                method: "GET",
                url: "",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;let jobId;let xLanguage;

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
         * 通过 Codehub 的模板进行应用代码创建  通过 Codehub 模板创建生成应用代码的任务，并将应用代码存储于指定的 CodeHub 仓库中或者生成代码压缩包，可以通过返回的任务 ID 查询相关任务状态  - 接口鉴权方式 通过华为云服务获取的用户token  - 代码生成位置 应用代码生成后的地址，目前支持codehub地址和压缩包下载地址。
         */
        runCodehubTemplateJob(runCodehubTemplateJobRequest?: RunCodehubTemplateJobRequest) {
            const options = {
                method: "POST",
                url: "",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            var body: any;let xLanguage;

            if (runCodehubTemplateJobRequest !== null && runCodehubTemplateJobRequest !== undefined) {
                if (runCodehubTemplateJobRequest instanceof RunCodehubTemplateJobRequest) {
                    body = runCodehubTemplateJobRequest.body
                    xLanguage = runCodehubTemplateJobRequest.xLanguage;
                } else {
                    body = runCodehubTemplateJobRequest['body'];
                    xLanguage = runCodehubTemplateJobRequest['X-Language'];
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
         * 通过DevStar的模板进行应用代码创建  通过 DevStar 模板创建生成应用代码的任务，并将应用代码存储于指定的 CodeHub 仓库中，可以通过返回的任务 ID 查询相关任务状态  - 接口鉴权方式 通过华为云服务获取的用户token  - 代码生成位置 应用代码生成后的地址，目前支持codehub地址和压缩包下载地址。
         */
        runDevstarTemplateJob(runDevstarTemplateJobRequest?: RunDevstarTemplateJobRequest) {
            const options = {
                method: "POST",
                url: "",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            var body: any;let xLanguage;

            if (runDevstarTemplateJobRequest !== null && runDevstarTemplateJobRequest !== undefined) {
                if (runDevstarTemplateJobRequest instanceof RunDevstarTemplateJobRequest) {
                    body = runDevstarTemplateJobRequest.body
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
                url: "",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;let jobId;let xLanguage;

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
         * 读取模板文件
         */
        showTemplateFile(showTemplateFileRequest?: ShowTemplateFileRequest) {
            const options = {
                method: "GET",
                url: "",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;let templateId;let filePath;let xLanguage;let type;

            if (showTemplateFileRequest !== null && showTemplateFileRequest !== undefined) {
                if (showTemplateFileRequest instanceof ShowTemplateFileRequest) {
                    templateId = showTemplateFileRequest.templateId;
                    filePath = showTemplateFileRequest.filePath;
                    xLanguage = showTemplateFileRequest.xLanguage;
                    type = showTemplateFileRequest.type;
                } else {
                    templateId = showTemplateFileRequest['template_id'];
                    filePath = showTemplateFileRequest['file_path'];
                    xLanguage = showTemplateFileRequest['X-Language'];
                    type = showTemplateFileRequest['type'];
                }
            }
        
            if (templateId === null || templateId === undefined) {
                throw new RequiredError('templateId','Required parameter templateId was null or undefined when calling showTemplateFile.');
            }
            if (filePath === null || filePath === undefined) {
                throw new RequiredError('filePath','Required parameter filePath was null or undefined when calling showTemplateFile.');
            }
            if (filePath !== null && filePath !== undefined) {
                localVarQueryParameter['file_path'] = filePath;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'template_id': templateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 生成模板浏览记录 
         */
        createTemplateViewHistories(createTemplateViewHistoriesRequest?: CreateTemplateViewHistoriesRequest) {
            const options = {
                method: "POST",
                url: "",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            var body: any;let xLanguage;

            if (createTemplateViewHistoriesRequest !== null && createTemplateViewHistoriesRequest !== undefined) {
                if (createTemplateViewHistoriesRequest instanceof CreateTemplateViewHistoriesRequest) {
                    body = createTemplateViewHistoriesRequest.body
                    xLanguage = createTemplateViewHistoriesRequest.xLanguage;
                } else {
                    body = createTemplateViewHistoriesRequest['body'];
                    xLanguage = createTemplateViewHistoriesRequest['X-Language'];
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
         * 查询模板列表
         */
        listPublishedTemplates(listPublishedTemplatesRequest?: ListPublishedTemplatesRequest) {
            const options = {
                method: "GET",
                url: "",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;let xLanguage;let keyword;let offset;let limit;

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
         * 查询用户浏览过的模板(只返回最近浏览的5个模板) 
         */
        listTemplateViewHistories(listTemplateViewHistoriesRequest?: ListTemplateViewHistoriesRequest) {
            const options = {
                method: "GET",
                url: "",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;let platformSource;let xLanguage;

            if (listTemplateViewHistoriesRequest !== null && listTemplateViewHistoriesRequest !== undefined) {
                if (listTemplateViewHistoriesRequest instanceof ListTemplateViewHistoriesRequest) {
                    platformSource = listTemplateViewHistoriesRequest.platformSource;
                    xLanguage = listTemplateViewHistoriesRequest.xLanguage;
                } else {
                    platformSource = listTemplateViewHistoriesRequest['platform_source'];
                    xLanguage = listTemplateViewHistoriesRequest['X-Language'];
                }
            }
        
            if (platformSource === null || platformSource === undefined) {
                throw new RequiredError('platformSource','Required parameter platformSource was null or undefined when calling listTemplateViewHistories.');
            }
            if (platformSource !== null && platformSource !== undefined) {
                localVarQueryParameter['platform_source'] = platformSource;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询模板列表
         */
        listTemplatesV2(listTemplatesV2Request?: ListTemplatesV2Request) {
            const options = {
                method: "POST",
                url: "",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;let actionId;let xLanguage;

            if (listTemplatesV2Request !== null && listTemplatesV2Request !== undefined) {
                if (listTemplatesV2Request instanceof ListTemplatesV2Request) {
                    actionId = listTemplatesV2Request.actionId;
                    xLanguage = listTemplatesV2Request.xLanguage;
                    body = listTemplatesV2Request.body
                } else {
                    actionId = listTemplatesV2Request['action_id'];
                    xLanguage = listTemplatesV2Request['X-Language'];
                    body = listTemplatesV2Request['body'];
                }
            }
        
            if (actionId === null || actionId === undefined) {
                throw new RequiredError('actionId','Required parameter actionId was null or undefined when calling listTemplatesV2.');
            }
            if (actionId !== null && actionId !== undefined) {
                localVarQueryParameter['action_id'] = actionId;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取模板详情-模板id、名称、描述、作者、标签、上架时间等信息。 
         */
        showTemplateV3(showTemplateV3Request?: ShowTemplateV3Request) {
            const options = {
                method: "GET",
                url: "",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;let templateId;let xLanguage;

            if (showTemplateV3Request !== null && showTemplateV3Request !== undefined) {
                if (showTemplateV3Request instanceof ShowTemplateV3Request) {
                    templateId = showTemplateV3Request.templateId;
                    xLanguage = showTemplateV3Request.xLanguage;
                } else {
                    templateId = showTemplateV3Request['template_id'];
                    xLanguage = showTemplateV3Request['X-Language'];
                }
            }
        
            if (templateId === null || templateId === undefined) {
                throw new RequiredError('templateId','Required parameter templateId was null or undefined when calling showTemplateV3.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'template_id': templateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询模板详情
         */
        showTemplateDetail(showTemplateDetailRequest?: ShowTemplateDetailRequest) {
            const options = {
                method: "GET",
                url: "",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;let templateId;let xLanguage;

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