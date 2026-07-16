

export class CodeTreeNode {
    public name?: string;
    public children?: Array<CodeTreeNode>;
    public constructor() { 
    }
    public withName(name: string): CodeTreeNode {
        this['name'] = name;
        return this;
    }
    public withChildren(children: Array<CodeTreeNode>): CodeTreeNode {
        this['children'] = children;
        return this;
    }
}