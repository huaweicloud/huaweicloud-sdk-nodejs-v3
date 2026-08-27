import { ApplyObjectInfo } from './ApplyObjectInfo';


export class UpdateStrategyApplyObjectsRequestBody {
    private 'operate_type'?: number;
    private 'delete_ids'?: Array<string>;
    private 'add_objects'?: Array<ApplyObjectInfo>;
    public constructor(operateType?: number) { 
        this['operate_type'] = operateType;
    }
    public withOperateType(operateType: number): UpdateStrategyApplyObjectsRequestBody {
        this['operate_type'] = operateType;
        return this;
    }
    public set operateType(operateType: number  | undefined) {
        this['operate_type'] = operateType;
    }
    public get operateType(): number | undefined {
        return this['operate_type'];
    }
    public withDeleteIds(deleteIds: Array<string>): UpdateStrategyApplyObjectsRequestBody {
        this['delete_ids'] = deleteIds;
        return this;
    }
    public set deleteIds(deleteIds: Array<string>  | undefined) {
        this['delete_ids'] = deleteIds;
    }
    public get deleteIds(): Array<string> | undefined {
        return this['delete_ids'];
    }
    public withAddObjects(addObjects: Array<ApplyObjectInfo>): UpdateStrategyApplyObjectsRequestBody {
        this['add_objects'] = addObjects;
        return this;
    }
    public set addObjects(addObjects: Array<ApplyObjectInfo>  | undefined) {
        this['add_objects'] = addObjects;
    }
    public get addObjects(): Array<ApplyObjectInfo> | undefined {
        return this['add_objects'];
    }
}