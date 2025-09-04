

export class EpDetail {
    public id?: string;
    public name?: string;
    public description?: string;
    public status?: number;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public type?: EpDetailTypeEnum | string;
    private 'delete_flag'?: boolean;
    public constructor(id?: string, name?: string, description?: string, status?: number, createdAt?: Date, updatedAt?: Date, type?: string, deleteFlag?: boolean) { 
        this['id'] = id;
        this['name'] = name;
        this['description'] = description;
        this['status'] = status;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
        this['type'] = type;
        this['delete_flag'] = deleteFlag;
    }
    public withId(id: string): EpDetail {
        this['id'] = id;
        return this;
    }
    public withName(name: string): EpDetail {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): EpDetail {
        this['description'] = description;
        return this;
    }
    public withStatus(status: number): EpDetail {
        this['status'] = status;
        return this;
    }
    public withCreatedAt(createdAt: Date): EpDetail {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): EpDetail {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withType(type: EpDetailTypeEnum | string): EpDetail {
        this['type'] = type;
        return this;
    }
    public withDeleteFlag(deleteFlag: boolean): EpDetail {
        this['delete_flag'] = deleteFlag;
        return this;
    }
    public set deleteFlag(deleteFlag: boolean  | undefined) {
        this['delete_flag'] = deleteFlag;
    }
    public get deleteFlag(): boolean | undefined {
        return this['delete_flag'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EpDetailTypeEnum {
    PROD = 'prod',
    POC = 'poc'
}
