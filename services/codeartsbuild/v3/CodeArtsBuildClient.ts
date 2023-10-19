import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { BuildStep } from './model/BuildStep';
import { DeleteBuildJobRequest } from './model/DeleteBuildJobRequest';
import { DeleteBuildJobResponse } from './model/DeleteBuildJobResponse';
import { DeleteBuildJobResponseBodyResult } from './model/DeleteBuildJobResponseBodyResult';
import { DisableBuildJobRequest } from './model/DisableBuildJobRequest';
import { DisableBuildJobResponse } from './model/DisableBuildJobResponse';
import { DownloadKeystoreRequest } from './model/DownloadKeystoreRequest';
import { DownloadKeystoreResponse } from './model/DownloadKeystoreResponse';
import { DownloadLogByRecordIdRequest } from './model/DownloadLogByRecordIdRequest';
import { DownloadLogByRecordIdResponse } from './model/DownloadLogByRecordIdResponse';
import { HistoryRecord } from './model/HistoryRecord';
import { HistoryRecord1 } from './model/HistoryRecord1';
import { Job } from './model/Job';
import { ParameterItem } from './model/ParameterItem';
import { RecordInfoResult } from './model/RecordInfoResult';
import { ResumeBuildJobRequest } from './model/ResumeBuildJobRequest';
import { ResumeBuildJobResponse } from './model/ResumeBuildJobResponse';
import { RunJobRequest } from './model/RunJobRequest';
import { RunJobRequestBody } from './model/RunJobRequestBody';
import { RunJobResponse } from './model/RunJobResponse';
import { Scm } from './model/Scm';
import { ShowHistoryDetailsRequest } from './model/ShowHistoryDetailsRequest';
import { ShowHistoryDetailsResponse } from './model/ShowHistoryDetailsResponse';
import { ShowJobListByProjectIdRequest } from './model/ShowJobListByProjectIdRequest';
import { ShowJobListByProjectIdResponse } from './model/ShowJobListByProjectIdResponse';
import { ShowJobStatusRequest } from './model/ShowJobStatusRequest';
import { ShowJobStatusResponse } from './model/ShowJobStatusResponse';
import { ShowJobSuccessRatioRequest } from './model/ShowJobSuccessRatioRequest';
import { ShowJobSuccessRatioResponse } from './model/ShowJobSuccessRatioResponse';
import { ShowLastHistoryRequest } from './model/ShowLastHistoryRequest';
import { ShowLastHistoryResponse } from './model/ShowLastHistoryResponse';
import { ShowListHistoryRequest } from './model/ShowListHistoryRequest';
import { ShowListHistoryResponse } from './model/ShowListHistoryResponse';
import { ShowListPeriodHistoryRequest } from './model/ShowListPeriodHistoryRequest';
import { ShowListPeriodHistoryResponse } from './model/ShowListPeriodHistoryResponse';
import { ShowRecordInfoRequest } from './model/ShowRecordInfoRequest';
import { ShowRecordInfoResponse } from './model/ShowRecordInfoResponse';
import { StopBuildJobRequest } from './model/StopBuildJobRequest';
import { StopBuildJobResponse } from './model/StopBuildJobResponse';

export class CodeArtsBuildClient {
    public static newBuilder(): ClientBuilder<CodeArtsBuildClient> {
            return new ClientBuilder<CodeArtsBuildClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 删除构建任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除构建任务
     * @param {string} jobId 构建的任务ID [获取项目下构建任务列表](https://support.huaweicloud.com/api-codeci/ShowJobListByProjectId.html)； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteBuildJob(deleteBuildJobRequest?: DeleteBuildJobRequest): Promise<DeleteBuildJobResponse> {
        const options = ParamCreater().deleteBuildJob(deleteBuildJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 禁用构建任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 禁用构建任务
     * @param {string} jobId 构建的任务ID [获取项目下构建任务列表](https://support.huaweicloud.com/api-codeci/ShowJobListByProjectId.html)； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disableBuildJob(disableBuildJobRequest?: DisableBuildJobRequest): Promise<DisableBuildJobResponse> {
        const options = ParamCreater().disableBuildJob(disableBuildJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 下载指定租户下的KeyStore文件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary KeyStore文件下载
     * @param {string} fileName 下载的文件名称
     * @param {string} domainId 租户ID。32位数字、小写字母组合
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public downloadKeystore(downloadKeystoreRequest?: DownloadKeystoreRequest): Promise<DownloadKeystoreResponse> {
        const options = ParamCreater().downloadKeystore(downloadKeystoreRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 下载构建日志
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 下载构建日志
     * @param {string} recordId 记录ID,36位数字、小写字母、\&#39;-\&#39;组组合。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public downloadLogByRecordId(downloadLogByRecordIdRequest?: DownloadLogByRecordIdRequest): Promise<DownloadLogByRecordIdResponse> {
        const options = ParamCreater().downloadLogByRecordId(downloadLogByRecordIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 恢复构建任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 恢复构建任务
     * @param {string} jobId 构建的任务ID [获取项目下构建任务列表](https://support.huaweicloud.com/api-codeci/ShowJobListByProjectId.html)； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resumeBuildJob(resumeBuildJobRequest?: ResumeBuildJobRequest): Promise<ResumeBuildJobResponse> {
        const options = ParamCreater().resumeBuildJob(resumeBuildJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 执行构建任务,可传自定义参数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 执行构建任务
     * @param {RunJobRequestBody} runJobRequestBody body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runJob(runJobRequest?: RunJobRequest): Promise<RunJobResponse> {
        const options = ParamCreater().runJob(runJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取构建历史详情信息接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取构建历史详情信息接口
     * @param {string} jobId 构建的任务ID [获取项目下构建任务列表](https://support.huaweicloud.com/api-codeci/ShowJobListByProjectId.html)； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {number} buildNumber 构建任务的构建编号，从1开始，每次构建递增1
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showHistoryDetails(showHistoryDetailsRequest?: ShowHistoryDetailsRequest): Promise<ShowHistoryDetailsResponse> {
        const options = ParamCreater().showHistoryDetails(showHistoryDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看项目下用户的构建任务列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看项目下用户的构建任务列表
     * @param {string} projectId CodeArts项目ID，32位数字、小写字母组合。[查询项目列表](https://support.huaweicloud.com/api-projectman/ListProjectsV4.html)
     * @param {number} pageIndex 分页页码， 表示从此页开始查询， page_index大于等于0
     * @param {number} pageSize 每页显示的条目数量，page_size小于等于100
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJobListByProjectId(showJobListByProjectIdRequest?: ShowJobListByProjectIdRequest): Promise<ShowJobListByProjectIdResponse> {
        const options = ParamCreater().showJobListByProjectId(showJobListByProjectIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看任务运行状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看任务运行状态
     * @param {string} jobId 构建的任务ID [获取项目下构建任务列表](https://support.huaweicloud.com/api-codeci/ShowJobListByProjectId.html)； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJobStatus(showJobStatusRequest?: ShowJobStatusRequest): Promise<ShowJobStatusResponse> {
        const options = ParamCreater().showJobStatus(showJobStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据开始时间和结束时间查看构建任务的构建成功率
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据开始时间和结束时间查看构建任务的构建成功率
     * @param {string} jobId 构建的任务ID [获取项目下构建任务列表](https://support.huaweicloud.com/api-codeci/ShowJobListByProjectId.html)； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {string} startTime 区间开始时间，格式yyyy-MM-dd。
     * @param {string} endTime 区间结束时间，格式yyyy-MM-dd。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJobSuccessRatio(showJobSuccessRatioRequest?: ShowJobSuccessRatioRequest): Promise<ShowJobSuccessRatioResponse> {
        const options = ParamCreater().showJobSuccessRatio(showJobSuccessRatioRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定代码仓库最近一次成功的构建历史
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定代码仓库最近一次成功的构建历史
     * @param {string} projectId CodeArts项目ID，32位数字、小写字母组合。[查询项目列表](https://support.huaweicloud.com/api-projectman/ListProjectsV4.html)
     * @param {string} repositoryName 代码仓库名，不支持中文
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showLastHistory(showLastHistoryRequest?: ShowLastHistoryRequest): Promise<ShowLastHistoryResponse> {
        const options = ParamCreater().showLastHistory(showLastHistoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看构建任务的构建历史列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看构建任务的构建历史列表
     * @param {string} jobId 构建的任务ID [获取项目下构建任务列表](https://support.huaweicloud.com/api-codeci/ShowJobListByProjectId.html)； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {number} offset 分页页码， 表示从此页开始查询， offset大于等于0
     * @param {number} limit 每页显示的条目数量，limit小于等于100
     * @param {number} interval 距今天的时间区间（单位：天），interval小于等于30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showListHistory(showListHistoryRequest?: ShowListHistoryRequest): Promise<ShowListHistoryResponse> {
        const options = ParamCreater().showListHistory(showListHistoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据开始时间和结束时间查看构建任务的构建历史列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据开始时间和结束时间查看构建任务的构建历史列表
     * @param {string} jobId 构建的任务ID [获取项目下构建任务列表](https://support.huaweicloud.com/api-codeci/ShowJobListByProjectId.html)； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {number} offset 分页页码， 表示从此页开始查询， offset大于等于0
     * @param {number} limit 每页显示的条目数量，limit小于等于100
     * @param {string} startTime 区间开始时间，格式yyyy-MM-dd。 开始时间和结束时间间隔不能超过30天
     * @param {string} endTime 区间结束时间，格式yyyy-MM-dd。 开始时间和结束时间间隔不能超过30天
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showListPeriodHistory(showListPeriodHistoryRequest?: ShowListPeriodHistoryRequest): Promise<ShowListPeriodHistoryResponse> {
        const options = ParamCreater().showListPeriodHistory(showListPeriodHistoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取构建记录信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取构建记录信息
     * @param {string} jobId 构建的任务ID [获取项目下构建任务列表](https://support.huaweicloud.com/api-codeci/ShowJobListByProjectId.html)； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {number} buildNo 构建任务的构建编号，从1开始，每次构建递增1
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRecordInfo(showRecordInfoRequest?: ShowRecordInfoRequest): Promise<ShowRecordInfoResponse> {
        const options = ParamCreater().showRecordInfo(showRecordInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 停止构建任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停止构建任务
     * @param {string} jobId 构建的任务ID [获取项目下构建任务列表](https://support.huaweicloud.com/api-codeci/ShowJobListByProjectId.html)； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {number} buildNo 构建任务的构建编号，从1开始，每次构建递增1
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopBuildJob(stopBuildJobRequest?: StopBuildJobRequest): Promise<StopBuildJobResponse> {
        const options = ParamCreater().stopBuildJob(stopBuildJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 删除构建任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteBuildJob(deleteBuildJobRequest?: DeleteBuildJobRequest) {
            const options = {
                method: "POST",
                url: "/v3/jobs/{job_id}/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;

            if (deleteBuildJobRequest !== null && deleteBuildJobRequest !== undefined) {
                if (deleteBuildJobRequest instanceof DeleteBuildJobRequest) {
                    jobId = deleteBuildJobRequest.jobId;
                } else {
                    jobId = deleteBuildJobRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling deleteBuildJob.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 禁用构建任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disableBuildJob(disableBuildJobRequest?: DisableBuildJobRequest) {
            const options = {
                method: "POST",
                url: "/v3/jobs/{job_id}/disable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;

            if (disableBuildJobRequest !== null && disableBuildJobRequest !== undefined) {
                if (disableBuildJobRequest instanceof DisableBuildJobRequest) {
                    jobId = disableBuildJobRequest.jobId;
                } else {
                    jobId = disableBuildJobRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling disableBuildJob.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 下载指定租户下的KeyStore文件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        downloadKeystore(downloadKeystoreRequest?: DownloadKeystoreRequest) {
            const options = {
                method: "GET",
                url: "/v3/keystore",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let fileName;
            
            let domainId;

            if (downloadKeystoreRequest !== null && downloadKeystoreRequest !== undefined) {
                if (downloadKeystoreRequest instanceof DownloadKeystoreRequest) {
                    fileName = downloadKeystoreRequest.fileName;
                    domainId = downloadKeystoreRequest.domainId;
                } else {
                    fileName = downloadKeystoreRequest['file_name'];
                    domainId = downloadKeystoreRequest['domain_id'];
                }
            }

        
            if (fileName === null || fileName === undefined) {
                throw new RequiredError('fileName','Required parameter fileName was null or undefined when calling downloadKeystore.');
            }
            if (fileName !== null && fileName !== undefined) {
                localVarQueryParameter['file_name'] = fileName;
            }
            if (domainId === null || domainId === undefined) {
                throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling downloadKeystore.');
            }
            if (domainId !== null && domainId !== undefined) {
                localVarQueryParameter['domain_id'] = domainId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 下载构建日志
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        downloadLogByRecordId(downloadLogByRecordIdRequest?: DownloadLogByRecordIdRequest) {
            const options = {
                method: "GET",
                url: "/v3/{record_id}/download-log",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let recordId;

            if (downloadLogByRecordIdRequest !== null && downloadLogByRecordIdRequest !== undefined) {
                if (downloadLogByRecordIdRequest instanceof DownloadLogByRecordIdRequest) {
                    recordId = downloadLogByRecordIdRequest.recordId;
                } else {
                    recordId = downloadLogByRecordIdRequest['record_id'];
                }
            }

        
            if (recordId === null || recordId === undefined) {
            throw new RequiredError('recordId','Required parameter recordId was null or undefined when calling downloadLogByRecordId.');
            }

            options.pathParams = { 'record_id': recordId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 恢复构建任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resumeBuildJob(resumeBuildJobRequest?: ResumeBuildJobRequest) {
            const options = {
                method: "POST",
                url: "/v3/jobs/{job_id}/recover",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;

            if (resumeBuildJobRequest !== null && resumeBuildJobRequest !== undefined) {
                if (resumeBuildJobRequest instanceof ResumeBuildJobRequest) {
                    jobId = resumeBuildJobRequest.jobId;
                } else {
                    jobId = resumeBuildJobRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling resumeBuildJob.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 执行构建任务,可传自定义参数。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        runJob(runJobRequest?: RunJobRequest) {
            const options = {
                method: "POST",
                url: "/v3/jobs/build",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (runJobRequest !== null && runJobRequest !== undefined) {
                if (runJobRequest instanceof RunJobRequest) {
                    body = runJobRequest.body
                } else {
                    body = runJobRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取构建历史详情信息接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showHistoryDetails(showHistoryDetailsRequest?: ShowHistoryDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v3/jobs/{job_id}/{build_number}/history-details",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;
            
            let buildNumber;

            if (showHistoryDetailsRequest !== null && showHistoryDetailsRequest !== undefined) {
                if (showHistoryDetailsRequest instanceof ShowHistoryDetailsRequest) {
                    jobId = showHistoryDetailsRequest.jobId;
                    buildNumber = showHistoryDetailsRequest.buildNumber;
                } else {
                    jobId = showHistoryDetailsRequest['job_id'];
                    buildNumber = showHistoryDetailsRequest['build_number'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showHistoryDetails.');
            }
            if (buildNumber === null || buildNumber === undefined) {
            throw new RequiredError('buildNumber','Required parameter buildNumber was null or undefined when calling showHistoryDetails.');
            }

            options.pathParams = { 'job_id': jobId,'build_number': buildNumber, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看项目下用户的构建任务列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showJobListByProjectId(showJobListByProjectIdRequest?: ShowJobListByProjectIdRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let pageIndex;
            
            let pageSize;

            if (showJobListByProjectIdRequest !== null && showJobListByProjectIdRequest !== undefined) {
                if (showJobListByProjectIdRequest instanceof ShowJobListByProjectIdRequest) {
                    projectId = showJobListByProjectIdRequest.projectId;
                    pageIndex = showJobListByProjectIdRequest.pageIndex;
                    pageSize = showJobListByProjectIdRequest.pageSize;
                } else {
                    projectId = showJobListByProjectIdRequest['project_id'];
                    pageIndex = showJobListByProjectIdRequest['page_index'];
                    pageSize = showJobListByProjectIdRequest['page_size'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showJobListByProjectId.');
            }
            if (pageIndex === null || pageIndex === undefined) {
                throw new RequiredError('pageIndex','Required parameter pageIndex was null or undefined when calling showJobListByProjectId.');
            }
            if (pageIndex !== null && pageIndex !== undefined) {
                localVarQueryParameter['page_index'] = pageIndex;
            }
            if (pageSize === null || pageSize === undefined) {
                throw new RequiredError('pageSize','Required parameter pageSize was null or undefined when calling showJobListByProjectId.');
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看任务运行状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showJobStatus(showJobStatusRequest?: ShowJobStatusRequest) {
            const options = {
                method: "GET",
                url: "/v3/jobs/{job_id}/status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;

            if (showJobStatusRequest !== null && showJobStatusRequest !== undefined) {
                if (showJobStatusRequest instanceof ShowJobStatusRequest) {
                    jobId = showJobStatusRequest.jobId;
                } else {
                    jobId = showJobStatusRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showJobStatus.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据开始时间和结束时间查看构建任务的构建成功率
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showJobSuccessRatio(showJobSuccessRatioRequest?: ShowJobSuccessRatioRequest) {
            const options = {
                method: "GET",
                url: "/v3/jobs/{job_id}/success-ratio",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let startTime;
            
            let endTime;

            if (showJobSuccessRatioRequest !== null && showJobSuccessRatioRequest !== undefined) {
                if (showJobSuccessRatioRequest instanceof ShowJobSuccessRatioRequest) {
                    jobId = showJobSuccessRatioRequest.jobId;
                    startTime = showJobSuccessRatioRequest.startTime;
                    endTime = showJobSuccessRatioRequest.endTime;
                } else {
                    jobId = showJobSuccessRatioRequest['job_id'];
                    startTime = showJobSuccessRatioRequest['start_time'];
                    endTime = showJobSuccessRatioRequest['end_time'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showJobSuccessRatio.');
            }
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling showJobSuccessRatio.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling showJobSuccessRatio.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定代码仓库最近一次成功的构建历史
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showLastHistory(showLastHistoryRequest?: ShowLastHistoryRequest) {
            const options = {
                method: "GET",
                url: "/v3/jobs/{project_id}/last-history",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let repositoryName;

            if (showLastHistoryRequest !== null && showLastHistoryRequest !== undefined) {
                if (showLastHistoryRequest instanceof ShowLastHistoryRequest) {
                    projectId = showLastHistoryRequest.projectId;
                    repositoryName = showLastHistoryRequest.repositoryName;
                } else {
                    projectId = showLastHistoryRequest['project_id'];
                    repositoryName = showLastHistoryRequest['repository_name'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showLastHistory.');
            }
            if (repositoryName === null || repositoryName === undefined) {
                throw new RequiredError('repositoryName','Required parameter repositoryName was null or undefined when calling showLastHistory.');
            }
            if (repositoryName !== null && repositoryName !== undefined) {
                localVarQueryParameter['repository_name'] = repositoryName;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看构建任务的构建历史列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showListHistory(showListHistoryRequest?: ShowListHistoryRequest) {
            const options = {
                method: "GET",
                url: "/v3/jobs/{job_id}/history",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let offset;
            
            let limit;
            
            let interval;

            if (showListHistoryRequest !== null && showListHistoryRequest !== undefined) {
                if (showListHistoryRequest instanceof ShowListHistoryRequest) {
                    jobId = showListHistoryRequest.jobId;
                    offset = showListHistoryRequest.offset;
                    limit = showListHistoryRequest.limit;
                    interval = showListHistoryRequest.interval;
                } else {
                    jobId = showListHistoryRequest['job_id'];
                    offset = showListHistoryRequest['offset'];
                    limit = showListHistoryRequest['limit'];
                    interval = showListHistoryRequest['interval'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showListHistory.');
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling showListHistory.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling showListHistory.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (interval === null || interval === undefined) {
                throw new RequiredError('interval','Required parameter interval was null or undefined when calling showListHistory.');
            }
            if (interval !== null && interval !== undefined) {
                localVarQueryParameter['interval'] = interval;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据开始时间和结束时间查看构建任务的构建历史列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showListPeriodHistory(showListPeriodHistoryRequest?: ShowListPeriodHistoryRequest) {
            const options = {
                method: "GET",
                url: "/v3/jobs/{job_id}/period-history",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let offset;
            
            let limit;
            
            let startTime;
            
            let endTime;

            if (showListPeriodHistoryRequest !== null && showListPeriodHistoryRequest !== undefined) {
                if (showListPeriodHistoryRequest instanceof ShowListPeriodHistoryRequest) {
                    jobId = showListPeriodHistoryRequest.jobId;
                    offset = showListPeriodHistoryRequest.offset;
                    limit = showListPeriodHistoryRequest.limit;
                    startTime = showListPeriodHistoryRequest.startTime;
                    endTime = showListPeriodHistoryRequest.endTime;
                } else {
                    jobId = showListPeriodHistoryRequest['job_id'];
                    offset = showListPeriodHistoryRequest['offset'];
                    limit = showListPeriodHistoryRequest['limit'];
                    startTime = showListPeriodHistoryRequest['start_time'];
                    endTime = showListPeriodHistoryRequest['end_time'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showListPeriodHistory.');
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling showListPeriodHistory.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling showListPeriodHistory.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling showListPeriodHistory.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling showListPeriodHistory.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取构建记录信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRecordInfo(showRecordInfoRequest?: ShowRecordInfoRequest) {
            const options = {
                method: "GET",
                url: "/v3/jobs/{job_id}/{build_no}/record-info",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;
            
            let buildNo;

            if (showRecordInfoRequest !== null && showRecordInfoRequest !== undefined) {
                if (showRecordInfoRequest instanceof ShowRecordInfoRequest) {
                    jobId = showRecordInfoRequest.jobId;
                    buildNo = showRecordInfoRequest.buildNo;
                } else {
                    jobId = showRecordInfoRequest['job_id'];
                    buildNo = showRecordInfoRequest['build_no'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showRecordInfo.');
            }
            if (buildNo === null || buildNo === undefined) {
            throw new RequiredError('buildNo','Required parameter buildNo was null or undefined when calling showRecordInfo.');
            }

            options.pathParams = { 'job_id': jobId,'build_no': buildNo, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 停止构建任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopBuildJob(stopBuildJobRequest?: StopBuildJobRequest) {
            const options = {
                method: "POST",
                url: "/v3/jobs/{job_id}/{build_no}/stop",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;
            
            let buildNo;

            if (stopBuildJobRequest !== null && stopBuildJobRequest !== undefined) {
                if (stopBuildJobRequest instanceof StopBuildJobRequest) {
                    jobId = stopBuildJobRequest.jobId;
                    buildNo = stopBuildJobRequest.buildNo;
                } else {
                    jobId = stopBuildJobRequest['job_id'];
                    buildNo = stopBuildJobRequest['build_no'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling stopBuildJob.');
            }
            if (buildNo === null || buildNo === undefined) {
            throw new RequiredError('buildNo','Required parameter buildNo was null or undefined when calling stopBuildJob.');
            }

            options.pathParams = { 'job_id': jobId,'build_no': buildNo, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): CodeArtsBuildClient {
    return new CodeArtsBuildClient(client);
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