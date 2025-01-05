import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const sales = [
    {
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        paidAmount: "100.00",
        avatar: "AJ",
    },
    {
        name: "Bob Smith",
        email: "bob.smith@example.com",
        paidAmount: "200.00",
        avatar: "BS",
    },
    {
        name: "Charlie Brown",
        email: "charlie.brown@example.com",
        paidAmount: "150.00",
        avatar: "CB",
    },
    {
        name: "Diana Prince",
        email: "diana.prince@example.com",
        paidAmount: "300.00",
        avatar: "DP",
    },
    {
        name: "Edward Cullen",
        email: "edward.cullen@example.com",
        paidAmount: "120.00",
        avatar: "EC",
    },
    {
        name: "Fiona Gallagher",
        email: "fiona.gallagher@example.com",
        paidAmount: "180.00",
        avatar: "FG",
    },
    {
        name: "George King",
        email: "george.king@example.com",
        paidAmount: "250.00",
        avatar: "GK",
    },
    {
        name: "Helen Parker",
        email: "helen.parker@example.com",
        paidAmount: "220.00",
        avatar: "HP",
    },
    {
        name: "Ian Somerhalder",
        email: "ian.somerhalder@example.com",
        paidAmount: "275.00",
        avatar: "IS",
    },
    {
        name: "Jane Doe",
        email: "jane.doe@example.com",
        paidAmount: "90.00",
        avatar: "JD",
    },
];

const RecentSales = () => {
    return (
        <div className="space-y-8">
            {sales.map((sale) => (
                <div key={sale.name} className="flex items-center">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="" alt="Avatar"/>
                    <AvatarFallback>{sale.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4 space-y-1 text-sm">
                    <p className="font-medium leading-none">{sale.name}</p>
                    <p className="text-muted-foreground">{sale.email}</p>
                  </div>
                  <div className="ml-auto font-medium">${sale.paidAmount}t</div>
                </div>
            ))}
        </div>
    );
};

export default RecentSales;
