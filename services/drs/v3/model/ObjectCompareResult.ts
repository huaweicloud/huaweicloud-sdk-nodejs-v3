import { ObjectCompareResultDetails } from './ObjectCompareResultDetails';
import { ObjectCompareResultOverview } from './ObjectCompareResultOverview';


export class ObjectCompareResult {
    private 'compare_task_id'?: string;
    private 'object_compare_overview'?: Array<ObjectCompareResultOverview>;
    private 'object_compare_details'?: { [key: string]: Array<ObjectCompareResultDetails>; };
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public constructor(compareTaskId?: string) { 
        this['compare_task_id'] = compareTaskId;
    }
    public withCompareTaskId(compareTaskId: string): ObjectCompareResult {
        this['compare_task_id'] = compareTaskId;
        return this;
    }
    public set compareTaskId(compareTaskId: string  | undefined) {
        this['compare_task_id'] = compareTaskId;
    }
    public get compareTaskId(): string | undefined {
        return this['compare_task_id'];
    }
    public withObjectCompareOverview(objectCompareOverview: Array<ObjectCompareResultOverview>): ObjectCompareResult {
        this['object_compare_overview'] = objectCompareOverview;
        return this;
    }
    public set objectCompareOverview(objectCompareOverview: Array<ObjectCompareResultOverview>  | undefined) {
        this['object_compare_overview'] = objectCompareOverview;
    }
    public get objectCompareOverview(): Array<ObjectCompareResultOverview> | undefined {
        return this['object_compare_overview'];
    }
    public withObjectCompareDetails(objectCompareDetails: { [key: string]: Array<ObjectCompareResultDetails>; }): ObjectCompareResult {
        this['object_compare_details'] = objectCompareDetails;
        return this;
    }
    public set objectCompareDetails(objectCompareDetails: { [key: string]: Array<ObjectCompareResultDetails>; }  | undefined) {
        this['object_compare_details'] = objectCompareDetails;
    }
    public get objectCompareDetails(): { [key: string]: Array<ObjectCompareResultDetails>; } | undefined {
        return this['object_compare_details'];
    }
    public withErrorCode(errorCode: string): ObjectCompareResult {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): ObjectCompareResult {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
}