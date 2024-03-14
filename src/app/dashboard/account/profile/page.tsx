

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Settings from "../settings/page";
import { Separator } from "@/components/ui/separator";

export default function Profile(){

  return(
    <Tabs defaultValue="account">
  <TabsList className="grid w-[400px] grid-cols-2">
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Profile Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <Separator/>
        hola mijin
      </TabsContent>
  <TabsContent value="password">
        <Settings/>
      </TabsContent>
</Tabs>
  );  
}
