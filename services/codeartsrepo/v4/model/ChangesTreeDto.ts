import { ChangesTreeObjectDto } from './ChangesTreeObjectDto';


export class ChangesTreeDto {
    private 'can_show_my_approval_files'?: boolean;
    public tree?: Array<ChangesTreeObjectDto>;
    public constructor() { 
    }
    public withCanShowMyApprovalFiles(canShowMyApprovalFiles: boolean): ChangesTreeDto {
        this['can_show_my_approval_files'] = canShowMyApprovalFiles;
        return this;
    }
    public set canShowMyApprovalFiles(canShowMyApprovalFiles: boolean  | undefined) {
        this['can_show_my_approval_files'] = canShowMyApprovalFiles;
    }
    public get canShowMyApprovalFiles(): boolean | undefined {
        return this['can_show_my_approval_files'];
    }
    public withTree(tree: Array<ChangesTreeObjectDto>): ChangesTreeDto {
        this['tree'] = tree;
        return this;
    }
}