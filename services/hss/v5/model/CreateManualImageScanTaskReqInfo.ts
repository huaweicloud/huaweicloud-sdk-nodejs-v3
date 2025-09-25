import { CreateManualImageScanTaskReqInfoImageInfo } from './CreateManualImageScanTaskReqInfoImageInfo';
import { CreateManualImageScanTaskReqInfoQueryInfo } from './CreateManualImageScanTaskReqInfoQueryInfo';


export class CreateManualImageScanTaskReqInfo {
    private 'scan_scope'?: number;
    private 'rate_limit'?: number;
    private 'is_all'?: boolean;
    private 'query_info'?: CreateManualImageScanTaskReqInfoQueryInfo;
    private 'image_info'?: Array<CreateManualImageScanTaskReqInfoImageInfo>;
    public constructor() { 
    }
    public withScanScope(scanScope: number): CreateManualImageScanTaskReqInfo {
        this['scan_scope'] = scanScope;
        return this;
    }
    public set scanScope(scanScope: number  | undefined) {
        this['scan_scope'] = scanScope;
    }
    public get scanScope(): number | undefined {
        return this['scan_scope'];
    }
    public withRateLimit(rateLimit: number): CreateManualImageScanTaskReqInfo {
        this['rate_limit'] = rateLimit;
        return this;
    }
    public set rateLimit(rateLimit: number  | undefined) {
        this['rate_limit'] = rateLimit;
    }
    public get rateLimit(): number | undefined {
        return this['rate_limit'];
    }
    public withIsAll(isAll: boolean): CreateManualImageScanTaskReqInfo {
        this['is_all'] = isAll;
        return this;
    }
    public set isAll(isAll: boolean  | undefined) {
        this['is_all'] = isAll;
    }
    public get isAll(): boolean | undefined {
        return this['is_all'];
    }
    public withQueryInfo(queryInfo: CreateManualImageScanTaskReqInfoQueryInfo): CreateManualImageScanTaskReqInfo {
        this['query_info'] = queryInfo;
        return this;
    }
    public set queryInfo(queryInfo: CreateManualImageScanTaskReqInfoQueryInfo  | undefined) {
        this['query_info'] = queryInfo;
    }
    public get queryInfo(): CreateManualImageScanTaskReqInfoQueryInfo | undefined {
        return this['query_info'];
    }
    public withImageInfo(imageInfo: Array<CreateManualImageScanTaskReqInfoImageInfo>): CreateManualImageScanTaskReqInfo {
        this['image_info'] = imageInfo;
        return this;
    }
    public set imageInfo(imageInfo: Array<CreateManualImageScanTaskReqInfoImageInfo>  | undefined) {
        this['image_info'] = imageInfo;
    }
    public get imageInfo(): Array<CreateManualImageScanTaskReqInfoImageInfo> | undefined {
        return this['image_info'];
    }
}