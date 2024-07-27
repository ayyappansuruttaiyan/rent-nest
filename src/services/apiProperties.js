import supabase from "./supabase";

export async function getProperties() {
  let { data: properties, error } = await supabase
    .from("properties")
    .select("*");

  if (error) {
    console.log(error);
    throw new Error("Could not load properties");
  }
  return properties;
}
