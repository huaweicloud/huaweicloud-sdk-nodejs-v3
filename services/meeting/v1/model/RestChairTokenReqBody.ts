

export class RestChairTokenReqBody {
    public applyChair?: number;
    public chairmanPwd?: string;
    public constructor(applyChair?: number) { 
        this['applyChair'] = applyChair;
    }
    public withApplyChair(applyChair: number): RestChairTokenReqBody {
        this['applyChair'] = applyChair;
        return this;
    }
    public withChairmanPwd(chairmanPwd: string): RestChairTokenReqBody {
        this['chairmanPwd'] = chairmanPwd;
        return this;
    }
}