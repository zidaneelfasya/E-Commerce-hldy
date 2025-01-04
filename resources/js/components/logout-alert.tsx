import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { router } from "@inertiajs/react";
import { AlertDialogProps } from "@radix-ui/react-alert-dialog";

const LogoutAlert = ({ onOpenChange, ...props }: AlertDialogProps) => {
    const handleLogout = () => {
        if (onOpenChange) onOpenChange(false);
        router.post("/logout");
        
    };

    return (
        <AlertDialog onOpenChange={onOpenChange} {...props}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Are you sure you want to terminate session?
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        className="bg-destructive hover:bg-destructive/80"
                        onClick={handleLogout}
                    >
                        Continue
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default LogoutAlert;
