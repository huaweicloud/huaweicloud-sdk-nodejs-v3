

export class DeleteHtapProcessReq {
    private 'process_list'?: Array<string>;
    public constructor(processList?: Array<string>) { 
        this['process_list'] = processList;
    }
    public withProcessList(processList: Array<string>): DeleteHtapProcessReq {
        this['process_list'] = processList;
        return this;
    }
    public set processList(processList: Array<string>  | undefined) {
        this['process_list'] = processList;
    }
    public get processList(): Array<string> | undefined {
        return this['process_list'];
    }
}