import { getCategoryAPI } from "@/apis/category";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

export function useCategory() {
  const categoryData = ref({});
  const route = useRoute();

  const getCategory = async (id: string | string[]) => {
    const res = await getCategoryAPI(id);
    categoryData.value = res.result;
  };

  watch(
    () => route.params.id,
    (id) => {
      if (id) {
        getCategory(id);
      }
    },
    {
      immediate: true,
    },
  );

  return { categoryData };
}
