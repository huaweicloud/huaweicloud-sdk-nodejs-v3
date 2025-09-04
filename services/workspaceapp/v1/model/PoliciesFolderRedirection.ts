import { FolderRedirectionOptions } from './FolderRedirectionOptions';


export class PoliciesFolderRedirection {
    private 'folder_redirection_status'?: number;
    public options?: FolderRedirectionOptions;
    public constructor() { 
    }
    public withFolderRedirectionStatus(folderRedirectionStatus: number): PoliciesFolderRedirection {
        this['folder_redirection_status'] = folderRedirectionStatus;
        return this;
    }
    public set folderRedirectionStatus(folderRedirectionStatus: number  | undefined) {
        this['folder_redirection_status'] = folderRedirectionStatus;
    }
    public get folderRedirectionStatus(): number | undefined {
        return this['folder_redirection_status'];
    }
    public withOptions(options: FolderRedirectionOptions): PoliciesFolderRedirection {
        this['options'] = options;
        return this;
    }
}