import { TemplateList } from './TemplateList';


export class ListOfficialTemplateResult {
    private 'total_size'?: number;
    public items?: Array<TemplateList>;
    public constructor() { 
    }
    public withTotalSize(totalSize: number): ListOfficialTemplateResult {
        this['total_size'] = totalSize;
        return this;
    }
    public set totalSize(totalSize: number  | undefined) {
        this['total_size'] = totalSize;
    }
    public get totalSize(): number | undefined {
        return this['total_size'];
    }
    public withItems(items: Array<TemplateList>): ListOfficialTemplateResult {
        this['items'] = items;
        return this;
    }
}