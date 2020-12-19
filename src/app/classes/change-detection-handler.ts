import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";
import { CheckListService } from "../services/check-list.service";

export class ChangeDetectionHandler {

    checklistChangeSubject = new Subject();

    constructor(public checkListService: CheckListService) {
        this.checklistChangeSubject
            .pipe(
                debounceTime(1500)
            )
            .subscribe(data => this.checkListService.saveCheckList());
    }

    onCheckListChange() {
        this.checklistChangeSubject.next();
    }
}