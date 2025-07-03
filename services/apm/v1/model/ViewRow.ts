import { ViewBase } from './ViewBase';


export class ViewRow {
    private 'view_list'?: Array<ViewBase>;
    public title?: string;
    public constructor() { 
    }
    public withViewList(viewList: Array<ViewBase>): ViewRow {
        this['view_list'] = viewList;
        return this;
    }
    public set viewList(viewList: Array<ViewBase>  | undefined) {
        this['view_list'] = viewList;
    }
    public get viewList(): Array<ViewBase> | undefined {
        return this['view_list'];
    }
    public withTitle(title: string): ViewRow {
        this['title'] = title;
        return this;
    }
}