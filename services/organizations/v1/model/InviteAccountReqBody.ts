import { TagDto } from './TagDto';
import { TargetDto } from './TargetDto';


export class InviteAccountReqBody {
    public target?: TargetDto;
    public notes?: string;
    public tags?: Array<TagDto>;
    public constructor(target?: TargetDto, notes?: string) { 
        this['target'] = target;
        this['notes'] = notes;
    }
    public withTarget(target: TargetDto): InviteAccountReqBody {
        this['target'] = target;
        return this;
    }
    public withNotes(notes: string): InviteAccountReqBody {
        this['notes'] = notes;
        return this;
    }
    public withTags(tags: Array<TagDto>): InviteAccountReqBody {
        this['tags'] = tags;
        return this;
    }
}