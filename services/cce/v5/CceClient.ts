import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { CreateImageCacheRequest } from './model/CreateImageCacheRequest';
import { CreateImageCacheRequestBody } from './model/CreateImageCacheRequestBody';
import { CreateImageCacheResponse } from './model/CreateImageCacheResponse';
import { DeleteImageCacheRequest } from './model/DeleteImageCacheRequest';
import { DeleteImageCacheResponse } from './model/DeleteImageCacheResponse';
import { ImageCacheBuildingConfig } from './model/ImageCacheBuildingConfig';
import { ImageCacheDetail } from './model/ImageCacheDetail';
import { ListImageCachesRequest } from './model/ListImageCachesRequest';
import { ListImageCachesResponse } from './model/ListImageCachesResponse';
import { ListPackageProductsRequest } from './model/ListPackageProductsRequest';
import { ListPackageProductsResponse } from './model/ListPackageProductsResponse';
import { PackageProductDetail } from './model/PackageProductDetail';
import { PackageProductRequestDetail } from './model/PackageProductRequestDetail';
import { ShowImageCacheRequest } from './model/ShowImageCacheRequest';
import { ShowImageCacheResponse } from './model/ShowImageCacheResponse';
import { SubscribePackageProductsRequest } from './model/SubscribePackageProductsRequest';
import { SubscribePackageProductsRequestBody } from './model/SubscribePackageProductsRequestBody';
import { SubscribePackageProductsResponse } from './model/SubscribePackageProductsResponse';

export class CceClient {
    public static newBuilder(): ClientBuilder<CceClient> {
            let client = new ClientBuilder<CceClient>(newClient);
            return client;
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 创建镜像缓存。创建过程会在指定集群中启动临时Pod进行镜像缓存构建，创建镜像缓存后，可在负载创建时通过使用镜像缓存功能大幅减少下载容器镜像的耗时，实现容器的快速启动。单租户创建镜像缓存数量上限为50。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建镜像缓存
     * @param {'application/json' | 'application/json;charset=utf-8' | 'application/x-pem-file' | 'multipart/form-data'} contentType **参数解释：** 消息体的类型（格式）。 **约束限制：** GET方法不做校验。 **取值范围：**   - application/json   - application/json;charset&#x3D;utf-8   - application/x-pem-file   - multipart/form-data（注：存在FormData参数时使用）  **默认取值：** 不涉及 
     * @param {CreateImageCacheRequestBody} createImageCacheRequestBody 创建镜像缓存请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createImageCache(createImageCacheRequest?: CreateImageCacheRequest): Promise<CreateImageCacheResponse> {
        const options = ParamCreater().createImageCache(createImageCacheRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除镜像缓存
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除镜像缓存
     * @param {'application/json' | 'application/json;charset=utf-8' | 'application/x-pem-file' | 'multipart/form-data'} contentType **参数解释：** 消息体的类型（格式）。 **约束限制：** GET方法不做校验。 **取值范围：**   - application/json   - application/json;charset&#x3D;utf-8   - application/x-pem-file   - multipart/form-data（注：存在FormData参数时使用）  **默认取值：** 不涉及 
     * @param {string} imageCacheId **参数解释：** 镜像缓存ID。 **约束限制：** 不涉及 **取值范围：** 镜像缓存ID。 **默认取值：** 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteImageCache(deleteImageCacheRequest?: DeleteImageCacheRequest): Promise<DeleteImageCacheResponse> {
        const options = ParamCreater().deleteImageCache(deleteImageCacheRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询镜像缓存列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询镜像缓存列表
     * @param {'application/json' | 'application/json;charset=utf-8' | 'application/x-pem-file' | 'multipart/form-data'} contentType **参数解释：** 消息体的类型（格式）。 **约束限制：** GET方法不做校验。 **取值范围：**   - application/json   - application/json;charset&#x3D;utf-8   - application/x-pem-file   - multipart/form-data（注：存在FormData参数时使用）  **默认取值：** 不涉及 
     * @param {string} [name] **参数解释：** 按单个镜像缓存名称进行过滤，不支持模糊匹配。 **约束限制：** 不涉及 **取值范围：** 以小写字母开头，由小写字母、数字、中划线(-)组成，长度范围1-128位，且不能以中划线(-)结尾。 **默认取值：** 无 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listImageCaches(listImageCachesRequest?: ListImageCachesRequest): Promise<ListImageCachesResponse> {
        const options = ParamCreater().listImageCaches(listImageCachesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询套餐包列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询套餐包列表
     * @param {'zh-cn' | 'en-us'} [locale] **参数解释**： 参数表示用户的语言/所在区域。根据 locale 参数，系统会返回适合该语言/区域的套餐包名称。 **约束限制：** 不涉及 **取值范围**： - zh-cn: 显示中文名称，例如：“Autopilot 通用型 1,000 核时CPU月包” - en-us: 显示英文名称，例如：“Autopilot General Computing 1,000 vCPU-hours CPU monthly package”  **默认取值：** zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPackageProducts(listPackageProductsRequest?: ListPackageProductsRequest): Promise<ListPackageProductsResponse> {
        const options = ParamCreater().listPackageProducts(listPackageProductsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询镜像缓存详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询镜像缓存详情
     * @param {'application/json' | 'application/json;charset=utf-8' | 'application/x-pem-file' | 'multipart/form-data'} contentType **参数解释：** 消息体的类型（格式）。 **约束限制：** GET方法不做校验。 **取值范围：**   - application/json   - application/json;charset&#x3D;utf-8   - application/x-pem-file   - multipart/form-data（注：存在FormData参数时使用）  **默认取值：** 不涉及 
     * @param {string} imageCacheId **参数解释：** 镜像缓存ID。 **约束限制：** 不涉及 **取值范围：** 镜像缓存ID。 **默认取值：** 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showImageCache(showImageCacheRequest?: ShowImageCacheRequest): Promise<ShowImageCacheResponse> {
        const options = ParamCreater().showImageCache(showImageCacheRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 订购套餐包
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 订购套餐包
     * @param {'application/json' | 'application/json;charset=utf-8' | 'application/x-pem-file' | 'multipart/form-data'} contentType **参数解释：** 消息体的类型（格式）。 **约束限制：** GET方法不做校验。 **取值范围：**   - application/json   - application/json;charset&#x3D;utf-8   - application/x-pem-file   - multipart/form-data（注：存在FormData参数时使用）  **默认取值：** 不涉及 
     * @param {SubscribePackageProductsRequestBody} subscribePackageProductsRequestBody 订购套餐包请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public subscribePackageProducts(subscribePackageProductsRequest?: SubscribePackageProductsRequest): Promise<SubscribePackageProductsResponse> {
        const options = ParamCreater().subscribePackageProducts(subscribePackageProductsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 创建镜像缓存。创建过程会在指定集群中启动临时Pod进行镜像缓存构建，创建镜像缓存后，可在负载创建时通过使用镜像缓存功能大幅减少下载容器镜像的耗时，实现容器的快速启动。单租户创建镜像缓存数量上限为50。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createImageCache(createImageCacheRequest?: CreateImageCacheRequest) {
            const options = {
                method: "POST",
                url: "/v5/imagecaches",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (createImageCacheRequest !== null && createImageCacheRequest !== undefined) {
                if (createImageCacheRequest instanceof CreateImageCacheRequest) {
                    contentType = createImageCacheRequest.contentType;
                    body = createImageCacheRequest.body
                } else {
                    contentType = createImageCacheRequest['Content-Type'];
                    body = createImageCacheRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除镜像缓存
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteImageCache(deleteImageCacheRequest?: DeleteImageCacheRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/imagecaches/{image_cache_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let imageCacheId;

            if (deleteImageCacheRequest !== null && deleteImageCacheRequest !== undefined) {
                if (deleteImageCacheRequest instanceof DeleteImageCacheRequest) {
                    contentType = deleteImageCacheRequest.contentType;
                    imageCacheId = deleteImageCacheRequest.imageCacheId;
                } else {
                    contentType = deleteImageCacheRequest['Content-Type'];
                    imageCacheId = deleteImageCacheRequest['image_cache_id'];
                }
            }

        
            if (imageCacheId === null || imageCacheId === undefined) {
            throw new RequiredError('imageCacheId','Required parameter imageCacheId was null or undefined when calling deleteImageCache.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'image_cache_id': imageCacheId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询镜像缓存列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listImageCaches(listImageCachesRequest?: ListImageCachesRequest) {
            const options = {
                method: "GET",
                url: "/v5/imagecaches",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let name;

            if (listImageCachesRequest !== null && listImageCachesRequest !== undefined) {
                if (listImageCachesRequest instanceof ListImageCachesRequest) {
                    contentType = listImageCachesRequest.contentType;
                    name = listImageCachesRequest.name;
                } else {
                    contentType = listImageCachesRequest['Content-Type'];
                    name = listImageCachesRequest['name'];
                }
            }

        
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询套餐包列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPackageProducts(listPackageProductsRequest?: ListPackageProductsRequest) {
            const options = {
                method: "GET",
                url: "/v5/package-products",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let locale;

            if (listPackageProductsRequest !== null && listPackageProductsRequest !== undefined) {
                if (listPackageProductsRequest instanceof ListPackageProductsRequest) {
                    locale = listPackageProductsRequest.locale;
                } else {
                    locale = listPackageProductsRequest['locale'];
                }
            }

        
            if (locale !== null && locale !== undefined) {
                localVarQueryParameter['locale'] = locale;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询镜像缓存详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showImageCache(showImageCacheRequest?: ShowImageCacheRequest) {
            const options = {
                method: "GET",
                url: "/v5/imagecaches/{image_cache_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let imageCacheId;

            if (showImageCacheRequest !== null && showImageCacheRequest !== undefined) {
                if (showImageCacheRequest instanceof ShowImageCacheRequest) {
                    contentType = showImageCacheRequest.contentType;
                    imageCacheId = showImageCacheRequest.imageCacheId;
                } else {
                    contentType = showImageCacheRequest['Content-Type'];
                    imageCacheId = showImageCacheRequest['image_cache_id'];
                }
            }

        
            if (imageCacheId === null || imageCacheId === undefined) {
            throw new RequiredError('imageCacheId','Required parameter imageCacheId was null or undefined when calling showImageCache.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'image_cache_id': imageCacheId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 订购套餐包
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        subscribePackageProducts(subscribePackageProductsRequest?: SubscribePackageProductsRequest) {
            const options = {
                method: "POST",
                url: "/v5/package-products/subscribe",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (subscribePackageProductsRequest !== null && subscribePackageProductsRequest !== undefined) {
                if (subscribePackageProductsRequest instanceof SubscribePackageProductsRequest) {
                    contentType = subscribePackageProductsRequest.contentType;
                    body = subscribePackageProductsRequest.body
                } else {
                    contentType = subscribePackageProductsRequest['Content-Type'];
                    body = subscribePackageProductsRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): CceClient {
    return new CceClient(client);
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