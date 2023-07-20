

export class DeleteScalingInstanceRequest {
    private 'instance_id'?: string;
    private 'instance_delete'?: DeleteScalingInstanceRequestInstanceDeleteEnum | string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): DeleteScalingInstanceRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceDelete(instanceDelete: DeleteScalingInstanceRequestInstanceDeleteEnum | string): DeleteScalingInstanceRequest {
        this['instance_delete'] = instanceDelete;
        return this;
    }
    public set instanceDelete(instanceDelete: DeleteScalingInstanceRequestInstanceDeleteEnum | string  | undefined) {
        this['instance_delete'] = instanceDelete;
    }
    public get instanceDelete(): DeleteScalingInstanceRequestInstanceDeleteEnum | string | undefined {
        return this['instance_delete'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteScalingInstanceRequestInstanceDeleteEnum {
    YES = 'yes',
    NO = 'no'
}
