interface IReminderListModel {
    title: string;
    showImage: boolean;
    reminders: any[];
}

class ReminderListCtrl implements IReminderListModel {
    title: string;
    showImage: boolean;
    reminders: any[];

    constructor() {
        this.title = "Reminders";
        this.showImage = false;
        this.reminders = [
            {
                "reminderId": 1,
                "reminderTitle": "Submit Homework",
                "reminderType": "School",
                "reminderDueDate": new Date(2017, 4, 1),
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
            },
            {
                "reminderId": 2,
                "reminderTitle": "Scout Dress Iron",
                "reminderType": "Scouts",
                "reminderDueDate": new Date(2017, 4, 1),
                "imageUrl": "https://openclipart.org/image/20px/svg_to_png/217124/fleur-de-lis_stylized.png"
            },
            {
                "reminderId": 3,
                "reminderTitle": "Raise money for school",
                "reminderType": "School",
                "reminderDueDate": new Date(2017, 4, 1),
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
            }];
    }
}

angular.module("chittiReminders")
    .controller("ReminderListCtrl", ReminderListCtrl)