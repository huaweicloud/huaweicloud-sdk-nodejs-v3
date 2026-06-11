import { FolderRedirectionV2Options } from './FolderRedirectionV2Options';


export class PoliciesFolderRedirectionV2 {
    private 'folder_redirection_v2_status'?: number;
    public options?: FolderRedirectionV2Options;
    public constructor() { 
    }
    public withFolderRedirectionV2Status(folderRedirectionV2Status: number): PoliciesFolderRedirectionV2 {
        this['folder_redirection_v2_status'] = folderRedirectionV2Status;
        return this;
    }
    public set folderRedirectionV2Status(folderRedirectionV2Status: number  | undefined) {
        this['folder_redirection_v2_status'] = folderRedirectionV2Status;
    }
    public get folderRedirectionV2Status(): number | undefined {
        return this['folder_redirection_v2_status'];
    }
    public withOptions(options: FolderRedirectionV2Options): PoliciesFolderRedirectionV2 {
        this['options'] = options;
        return this;
    }
}