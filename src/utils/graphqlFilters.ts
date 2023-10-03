import { FilterType } from "@/types/filterTypes";
import { PriorityTypes } from "@/types/priorityTypes";

export function getCategoryByType(type: FilterType) {
  if (type == FilterType.MUG) return "mugs"
  if (type == FilterType.SHIRT) return "t-shirts"
  return ""
}

export function getFealdByPriority(getFealdByPriority: PriorityTypes) {
  if (getFealdByPriority === PriorityTypes.NEWS) return { field: "creatd_at", order: "ASC" }
  if (getFealdByPriority === PriorityTypes.BIGGEST_PRICE) return { field: "price_in_cents", order: "DSC" }
  if (getFealdByPriority === PriorityTypes.MINOR_PRICE) return { field: "price_in_cents", order: "ASC" }
  return { field: "sales", order: "DSC" }
}

export const mountQuery = (type: FilterType, priority: PriorityTypes) => {
  if (type === FilterType.ALL && priority === PriorityTypes.POPULARITY)
    return `
  query {
    allProducts(sortField: "sales", sortOrder: "DSC") {
      id
      name
      price_in_cents
      image_url
      category
    }
  }
  `;
  const sorterSettings = getFealdByPriority(priority);
  const categoryFilter = getCategoryByType(type);
  return `
  query {
    allProducts( sortField: "${sorterSettings.field}", sortOrder: "${sorterSettings.order
    }", ${categoryFilter ? `filter: {category: "${getCategoryByType(type)}"}` : ""
    }) {
      id
      name
      price_in_cents
      image_url
      category
    }
  }
  `;
};