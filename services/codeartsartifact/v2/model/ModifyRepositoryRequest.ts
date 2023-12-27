import { IDERepositoryPair } from './IDERepositoryPair';


export class ModifyRepositoryRequest {
    private 'tab_id'?: string;
    public body?: IDERepositoryPair;
    public constructor(tabId?: string) { 
        this['tab_id'] = tabId;
    }
    public withTabId(tabId: string): ModifyRepositoryRequest {
        this['tab_id'] = tabId;
        return this;
    }
    public set tabId(tabId: string  | undefined) {
        this['tab_id'] = tabId;
    }
    public get tabId(): string | undefined {
        return this['tab_id'];
    }
    public withBody(body: IDERepositoryPair): ModifyRepositoryRequest {
        this['body'] = body;
        return this;
    }
}