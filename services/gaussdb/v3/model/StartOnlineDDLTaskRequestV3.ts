import { StartOnlineTaskContentItem } from './StartOnlineTaskContentItem';


export class StartOnlineDDLTaskRequestV3 {
    private 'auto_clear'?: boolean;
    private 'task_content'?: Array<StartOnlineTaskContentItem>;
    public constructor(taskContent?: Array<StartOnlineTaskContentItem>) { 
        this['task_content'] = taskContent;
    }
    public withAutoClear(autoClear: boolean): StartOnlineDDLTaskRequestV3 {
        this['auto_clear'] = autoClear;
        return this;
    }
    public set autoClear(autoClear: boolean  | undefined) {
        this['auto_clear'] = autoClear;
    }
    public get autoClear(): boolean | undefined {
        return this['auto_clear'];
    }
    public withTaskContent(taskContent: Array<StartOnlineTaskContentItem>): StartOnlineDDLTaskRequestV3 {
        this['task_content'] = taskContent;
        return this;
    }
    public set taskContent(taskContent: Array<StartOnlineTaskContentItem>  | undefined) {
        this['task_content'] = taskContent;
    }
    public get taskContent(): Array<StartOnlineTaskContentItem> | undefined {
        return this['task_content'];
    }
}