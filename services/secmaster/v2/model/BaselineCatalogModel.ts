import { CheckitemCatalogModel } from './CheckitemCatalogModel';


export class BaselineCatalogModel {
    public uuid?: string;
    private 'serial_number'?: number;
    private 'level_number'?: number;
    public root?: string;
    public parent?: string;
    private 'is_leaf'?: boolean;
    private 'check_items'?: Array<CheckitemCatalogModel>;
    public constructor(uuid?: string, serialNumber?: number, levelNumber?: number, root?: string, parent?: string) { 
        this['uuid'] = uuid;
        this['serial_number'] = serialNumber;
        this['level_number'] = levelNumber;
        this['root'] = root;
        this['parent'] = parent;
    }
    public withUuid(uuid: string): BaselineCatalogModel {
        this['uuid'] = uuid;
        return this;
    }
    public withSerialNumber(serialNumber: number): BaselineCatalogModel {
        this['serial_number'] = serialNumber;
        return this;
    }
    public set serialNumber(serialNumber: number  | undefined) {
        this['serial_number'] = serialNumber;
    }
    public get serialNumber(): number | undefined {
        return this['serial_number'];
    }
    public withLevelNumber(levelNumber: number): BaselineCatalogModel {
        this['level_number'] = levelNumber;
        return this;
    }
    public set levelNumber(levelNumber: number  | undefined) {
        this['level_number'] = levelNumber;
    }
    public get levelNumber(): number | undefined {
        return this['level_number'];
    }
    public withRoot(root: string): BaselineCatalogModel {
        this['root'] = root;
        return this;
    }
    public withParent(parent: string): BaselineCatalogModel {
        this['parent'] = parent;
        return this;
    }
    public withIsLeaf(isLeaf: boolean): BaselineCatalogModel {
        this['is_leaf'] = isLeaf;
        return this;
    }
    public set isLeaf(isLeaf: boolean  | undefined) {
        this['is_leaf'] = isLeaf;
    }
    public get isLeaf(): boolean | undefined {
        return this['is_leaf'];
    }
    public withCheckItems(checkItems: Array<CheckitemCatalogModel>): BaselineCatalogModel {
        this['check_items'] = checkItems;
        return this;
    }
    public set checkItems(checkItems: Array<CheckitemCatalogModel>  | undefined) {
        this['check_items'] = checkItems;
    }
    public get checkItems(): Array<CheckitemCatalogModel> | undefined {
        return this['check_items'];
    }
}