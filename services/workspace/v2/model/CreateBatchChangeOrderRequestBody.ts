import { CreateChangeImageOrderRequestBody } from './CreateChangeImageOrderRequestBody';
import { CreateDeleteSubResourcesOrderRequestBody } from './CreateDeleteSubResourcesOrderRequestBody';
import { CreateResizeOrderRequestBody } from './CreateResizeOrderRequestBody';
import { EstimateAddSubResourcesRequestBody } from './EstimateAddSubResourcesRequestBody';
import { EstimateAddVolumeRequestBody } from './EstimateAddVolumeRequestBody';
import { EstimateExtendVolumeRequestBody } from './EstimateExtendVolumeRequestBody';


export class CreateBatchChangeOrderRequestBody {
    public type?: CreateBatchChangeOrderRequestBodyTypeEnum | string;
    private 'add_volume_param'?: EstimateAddVolumeRequestBody;
    private 'extend_volume_param'?: EstimateExtendVolumeRequestBody;
    private 'resize_param'?: CreateResizeOrderRequestBody;
    private 'change_image_param'?: CreateChangeImageOrderRequestBody;
    private 'add_sub_resources_param'?: EstimateAddSubResourcesRequestBody;
    private 'delete_sub_resources_param'?: CreateDeleteSubResourcesOrderRequestBody;
    public constructor() { 
    }
    public withType(type: CreateBatchChangeOrderRequestBodyTypeEnum | string): CreateBatchChangeOrderRequestBody {
        this['type'] = type;
        return this;
    }
    public withAddVolumeParam(addVolumeParam: EstimateAddVolumeRequestBody): CreateBatchChangeOrderRequestBody {
        this['add_volume_param'] = addVolumeParam;
        return this;
    }
    public set addVolumeParam(addVolumeParam: EstimateAddVolumeRequestBody  | undefined) {
        this['add_volume_param'] = addVolumeParam;
    }
    public get addVolumeParam(): EstimateAddVolumeRequestBody | undefined {
        return this['add_volume_param'];
    }
    public withExtendVolumeParam(extendVolumeParam: EstimateExtendVolumeRequestBody): CreateBatchChangeOrderRequestBody {
        this['extend_volume_param'] = extendVolumeParam;
        return this;
    }
    public set extendVolumeParam(extendVolumeParam: EstimateExtendVolumeRequestBody  | undefined) {
        this['extend_volume_param'] = extendVolumeParam;
    }
    public get extendVolumeParam(): EstimateExtendVolumeRequestBody | undefined {
        return this['extend_volume_param'];
    }
    public withResizeParam(resizeParam: CreateResizeOrderRequestBody): CreateBatchChangeOrderRequestBody {
        this['resize_param'] = resizeParam;
        return this;
    }
    public set resizeParam(resizeParam: CreateResizeOrderRequestBody  | undefined) {
        this['resize_param'] = resizeParam;
    }
    public get resizeParam(): CreateResizeOrderRequestBody | undefined {
        return this['resize_param'];
    }
    public withChangeImageParam(changeImageParam: CreateChangeImageOrderRequestBody): CreateBatchChangeOrderRequestBody {
        this['change_image_param'] = changeImageParam;
        return this;
    }
    public set changeImageParam(changeImageParam: CreateChangeImageOrderRequestBody  | undefined) {
        this['change_image_param'] = changeImageParam;
    }
    public get changeImageParam(): CreateChangeImageOrderRequestBody | undefined {
        return this['change_image_param'];
    }
    public withAddSubResourcesParam(addSubResourcesParam: EstimateAddSubResourcesRequestBody): CreateBatchChangeOrderRequestBody {
        this['add_sub_resources_param'] = addSubResourcesParam;
        return this;
    }
    public set addSubResourcesParam(addSubResourcesParam: EstimateAddSubResourcesRequestBody  | undefined) {
        this['add_sub_resources_param'] = addSubResourcesParam;
    }
    public get addSubResourcesParam(): EstimateAddSubResourcesRequestBody | undefined {
        return this['add_sub_resources_param'];
    }
    public withDeleteSubResourcesParam(deleteSubResourcesParam: CreateDeleteSubResourcesOrderRequestBody): CreateBatchChangeOrderRequestBody {
        this['delete_sub_resources_param'] = deleteSubResourcesParam;
        return this;
    }
    public set deleteSubResourcesParam(deleteSubResourcesParam: CreateDeleteSubResourcesOrderRequestBody  | undefined) {
        this['delete_sub_resources_param'] = deleteSubResourcesParam;
    }
    public get deleteSubResourcesParam(): CreateDeleteSubResourcesOrderRequestBody | undefined {
        return this['delete_sub_resources_param'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateBatchChangeOrderRequestBodyTypeEnum {
    ADD_VOLUME = 'ADD_VOLUME',
    EXTEND_VOLUME = 'EXTEND_VOLUME',
    RESIZE = 'RESIZE',
    CHANGE_IMAGE = 'CHANGE_IMAGE',
    ADD_SUB_RESOURCES = 'ADD_SUB_RESOURCES',
    DELETE_SUB_RESOURCES = 'DELETE_SUB_RESOURCES'
}
