import { Like } from 'typeorm';
export class RestaurantRepository {
  constructor(dataSource) {
    this.dataSource = dataSource;
  }

  //1. 업장 정보 생성
  createRestaurant = async (name, content, address, email, phone) => {
    const data = {
      name,
      content,
      address,
      email,
      phone,
    };

    await this.dataSource.getRepository('restaurant').insert(data);

    return {
      message: '가게 정보가 등록되었습니다.',
    };
  };

  findAllRestaurant = async () => {
    const allRestaurant = await this.dataSource
      .getRepository('restaurant')
      .find({
        select: {
          name: true,
          content: true,
        },
      });

    return allRestaurant;
  };

  findAllRestaurantByName = async (name) => {
    const allRestaurantByName = await this.dataSource
      .getRepository('restaurant')
      .find({
        where: {
          name: Like(`%${name}%`),
        },
        select: {
          name: true,
          content: true,
        },
      });

    return allRestaurantByName;
  };
  findRestaurant = async (name) => {
    const restaurant = await this.dataSource
      .getRepository('restaurant')
      .findOne({
        where: {
          name,
        },
        select: {
          name: true,
          content: true,
          address: true,
          email: true,
          phone: true,
          rating: true,
        },
      });

    return restaurant;
  };

  findOwnersRestaurant = async (email) => {
    const ownersRestaurant = await this.dataSource
      .getRepository('restaurant')
      .findOne({
        where: {
          email,
        },
      });

    return ownersRestaurant;
  };

  updateRestaurant = async (content, email) => {
    const data = {
      content,
    };
    // TODO 유효성 검사(이름 틀려도 수정됐다고함(진짜수정은안되긴함))
    await this.dataSource.getRepository('restaurant').update(
      {
        email,
      },
      data
    );

    return {
      message: '수정이 완료됐습니다.',
    };
  };

  deleteRestaurant = async (email) => {
    await this.dataSource.getRepository('restaurant').delete({
      email,
    });

    return { message: '삭제되었습니다.' };
  };
}
