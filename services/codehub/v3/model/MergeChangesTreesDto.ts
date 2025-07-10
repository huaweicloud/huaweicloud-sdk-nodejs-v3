import { MergeChangesTrees } from './MergeChangesTrees';


export class MergeChangesTreesDto {
    public tree?: Array<MergeChangesTrees>;
    public constructor() { 
    }
    public withTree(tree: Array<MergeChangesTrees>): MergeChangesTreesDto {
        this['tree'] = tree;
        return this;
    }
}