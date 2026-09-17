import { DeleteIssueNoteParam } from './DeleteIssueNoteParam';


export class DeleteScrumMyIssueNotesRequest {
    public body?: DeleteIssueNoteParam;
    public constructor() { 
    }
    public withBody(body: DeleteIssueNoteParam): DeleteScrumMyIssueNotesRequest {
        this['body'] = body;
        return this;
    }
}