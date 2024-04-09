
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog.tsx";
import AddNewUserForm from "@/components/add-new-user-form.tsx";

export default function UserRoleDialog() {

	return (
		<div>
			<Dialog>
				<DialogTrigger className="w-full flex items-center flex-nowrap gap-x-2 font-medium text-sm px-3 py-2 rounded-md hover:bg-muted cursor-pointer">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" className="size-5">
						<path fill="currentColor" d="M17.254 11a2.25 2.25 0 0 1 2.25 2.25v6.249a5.501 5.501 0 0 1-11.002 0V13.25a2.25 2.25 0 0 1 2.25-2.25zm0 1.5h-6.502a.75.75 0 0 0-.75.75v6.249a4.001 4.001 0 0 0 8.002 0V13.25a.75.75 0 0 0-.75-.75M4.25 11h4.156a3.243 3.243 0 0 0-.817 1.5H4.25a.75.75 0 0 0-.75.75v5.249a3.001 3.001 0 0 0 4.238 2.735c.133.49.324.956.564 1.392A4.501 4.501 0 0 1 2 18.499V13.25A2.25 2.25 0 0 1 4.25 11m19.5 0A2.25 2.25 0 0 1 26 13.25v5.25a4.5 4.5 0 0 1-6.298 4.127l.056-.102c.214-.406.387-.837.511-1.289A3 3 0 0 0 24.5 18.5v-5.25a.75.75 0 0 0-.749-.75h-3.333A3.242 3.242 0 0 0 19.6 11zM14 3a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7m8.003 1a3 3 0 1 1 0 6a3 3 0 0 1 0-6M5.997 4a3 3 0 1 1 0 6a3 3 0 0 1 0-6M14 4.5a2 2 0 1 0 0 4a2 2 0 0 0 0-4m8.003 1a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m-16.006 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></path>
					</svg>
					<p className="hidden md:block">Utilisateurs</p>
				</DialogTrigger>
				<DialogContent>
					<AddNewUserForm />
				</DialogContent>
			</Dialog>

		</div>
	)
}