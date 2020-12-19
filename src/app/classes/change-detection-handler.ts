import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";
import { StorageService } from "../services/storage.service";

export class ChangeDetectionHandler {

    checklistChangeSubject = new Subject();

    constructor(public storageService: StorageService) {
        this.checklistChangeSubject
            .pipe(
                debounceTime(2000)
            )
            .subscribe(data => this.storageService.saveCheckList());
    }

    onCheckListChange() {
        this.checklistChangeSubject.next();
    }
}