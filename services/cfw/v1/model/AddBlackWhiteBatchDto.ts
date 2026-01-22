import { BlackWhiteInfo } from './BlackWhiteInfo';


export class AddBlackWhiteBatchDto {
    private 'list_items'?: Array<BlackWhiteInfo>;
    private 'list_type'?: number;
    private 'object_id'?: string;
    public constructor(listItems?: Array<BlackWhiteInfo>, listType?: number, objectId?: string) { 
        this['list_items'] = listItems;
        this['list_type'] = listType;
        this['object_id'] = objectId;
    }
    public withListItems(listItems: Array<BlackWhiteInfo>): AddBlackWhiteBatchDto {
        this['list_items'] = listItems;
        return this;
    }
    public set listItems(listItems: Array<BlackWhiteInfo>  | undefined) {
        this['list_items'] = listItems;
    }
    public get listItems(): Array<BlackWhiteInfo> | undefined {
        return this['list_items'];
    }
    public withListType(listType: number): AddBlackWhiteBatchDto {
        this['list_type'] = listType;
        return this;
    }
    public set listType(listType: number  | undefined) {
        this['list_type'] = listType;
    }
    public get listType(): number | undefined {
        return this['list_type'];
    }
    public withObjectId(objectId: string): AddBlackWhiteBatchDto {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
}